import { AnimatedSection } from '@/components/ui/AnimatedSection';
import type { PolicyBlock, PolicyDoc } from '@/data/policies';

function CompanyBlock({ lines }: { lines: string[] }) {
  return (
    <div className="mt-2 space-y-0.5 text-text-light leading-relaxed">
      {lines.map((line) => {
        if (line.startsWith('Email:')) {
          const email = line.replace('Email:', '').trim();
          return (
            <p key={line}>
              Email:{' '}
              <a href={`mailto:${email}`} className="text-primary hover:text-primary-dark">
                {email}
              </a>
            </p>
          );
        }
        if (line.startsWith('Phone:')) {
          const phone = line.replace('Phone:', '').trim();
          return (
            <p key={line}>
              Phone:{' '}
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-primary hover:text-primary-dark">
                {phone}
              </a>
            </p>
          );
        }
        if (line.startsWith('Website:')) {
          const url = line.replace('Website:', '').trim();
          return (
            <p key={line}>
              Website:{' '}
              <a href={url} className="text-primary hover:text-primary-dark" target="_blank" rel="noreferrer">
                {url}
              </a>
            </p>
          );
        }
        const isName = line === lines[0];
        return (
          <p key={line} className={isName ? 'font-semibold text-text' : undefined}>
            {line}
          </p>
        );
      })}
    </div>
  );
}

function ItemList({ items, bullet }: { items: string[]; bullet?: boolean }) {
  return (
    <ul className={`mt-2 space-y-1 ${bullet ? 'list-disc pl-5' : 'list-none'}`}>
      {items.map((item, i) => (
        <li key={i} className="text-text-light leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

function DefinitionText({ text }: { text: string }) {
  const idx = text.indexOf(' means ');
  if (idx === -1) return <>{text}</>;
  const term = text.slice(0, idx);
  const rest = text.slice(idx);
  return (
    <>
      <strong className="font-semibold text-text">{term}</strong>
      {rest}
    </>
  );
}

function Block({ block }: { block: PolicyBlock }) {
  if (block.company) {
    return <CompanyBlock lines={block.company} />;
  }
  return (
    <div>
      {block.text && (
        <p className="mt-3 text-text-light leading-relaxed">
          {block.num && <span className="font-semibold text-text">{block.num} </span>}
          {block.definition ? <DefinitionText text={block.text} /> : block.text}
        </p>
      )}
      {block.num && !block.text && (
        <p className="mt-3 font-semibold text-text">{block.num}</p>
      )}
      {block.items && <ItemList items={block.items} bullet={block.bullet} />}
    </div>
  );
}

export function PolicyDocument({ doc }: { doc: PolicyDoc }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <AnimatedSection>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-text md:text-4xl">{doc.title}</h1>
          <p className="mt-3 text-text-light">{doc.effectiveDate}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-10">
        <div className="rounded-2xl border border-border bg-white p-6 md:p-10 shadow-sm">
          <div className="space-y-1">
            {doc.intro.map((block, i) => (
              <div key={i}>
                <Block block={block} />
                {block.text?.trim().endsWith('by:') && <CompanyBlock lines={doc.company} />}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-8">
            {doc.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold text-text">{section.title}</h2>
                <div className="mt-1">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
