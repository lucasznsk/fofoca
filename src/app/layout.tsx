import { NavBar } from '@/components/NavBar/NavBar';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
