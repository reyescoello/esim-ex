import Image from 'next/image';

const logos = [
  { src: '/cards/visa-logo.svg', alt: 'Visa', width: 74, height: 28 },
  { src: '/cards/mastercard.svg', alt: 'Mastercard', width: 42, height: 28 },
  { src: '/cards/pci-dss-compliant-logo-vector.svg', alt: 'PCI DSS Compliant', width: 28, height: 28 },
];

export function PaymentLogos() {
  return (
    <div className="flex items-center gap-4">
      {logos.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-7 w-auto"
        />
      ))}
    </div>
  );
}
