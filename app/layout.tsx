import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/shared/navigation';
import { ToastProvider } from '@/contexts/toast-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prathi - Your Medicine Companion',
  description: 'Smart medicine reminder powered by the wisdom of Ayurveda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          {children}
          {/* <Navigation /> */}
        </ToastProvider>
      </body>
    </html>
  );
}