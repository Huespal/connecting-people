import '@/core/styles/globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Connecting people',
  description: 'A subscriber register steps to connect your account'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.variable}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
