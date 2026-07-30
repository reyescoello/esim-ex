import { PolicyDocument } from '@/components/ui/PolicyDocument';
import { getPolicy } from '@/data/policies';

export const metadata = {
  title: 'Digital Delivery Policy',
};

export default function DeliveryPage() {
  const doc = getPolicy('delivery')!;
  return <PolicyDocument doc={doc} />;
}
