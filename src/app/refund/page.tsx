import { PolicyDocument } from '@/components/ui/PolicyDocument';
import { getPolicy } from '@/data/policies';

export const metadata = {
  title: 'Refund and Cancellation Policy',
};

export default function RefundPage() {
  const doc = getPolicy('refund')!;
  return <PolicyDocument doc={doc} />;
}
