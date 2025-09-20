import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DevUtils - Developer Toolkit',
  description: 'A comprehensive SaaS toolkit with 47+ utilities for developers focused on data processing, code transformation, and debugging support.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}