import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '💫DopDang',
  description: 'Serve you the professional touch',
};

export default function CommissionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-full pb-200 flex justify-center">{children}</main>;
}
