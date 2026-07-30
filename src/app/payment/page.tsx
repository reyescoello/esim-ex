import { PolicyDocument } from '@/components/ui/PolicyDocument';
import { getPolicy } from '@/data/policies';

export const metadata = {
  title: 'Payment Policy',
};

export default function PaymentPage() {
  const doc = getPolicy('payment')!;
  return <PolicyDocument doc={doc} />;
}
