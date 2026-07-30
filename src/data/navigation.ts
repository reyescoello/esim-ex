import { NavItem, FooterSection, TopUpOption } from '@/types';

export const mainNav: NavItem[] = [
  { label: 'Locations', href: '/locations' },
  { label: 'Regional', href: '/regional' },
  { label: 'Global', href: '/global' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Blog', href: '/blog' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'Local eSIMs', href: '/locations' },
      { label: 'Regional eSIMs', href: '/regional' },
      { label: 'Global eSIMs', href: '/global' },
      { label: 'Top Up Balance', href: '/top-up' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Get Started', href: '/get-started' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Help Centre', href: '/help' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Refund & Cancellation', href: '/refund' },
      { label: 'Digital Delivery', href: '/delivery' },
      { label: 'Payment Policy', href: '/payment' },
    ],
  },
];

export const topUpOptions: TopUpOption[] = [
  { amount: 10 },
  { amount: 20, popular: true },
  { amount: 30 },
  { amount: 50 },
  { amount: 100 },
];
