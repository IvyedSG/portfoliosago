import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '~/lib/utils';
import { Providers } from './providers';

const mono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deyvi - Desarrollador Frontend',
  description:
    'Portfolio de Deyvi - Desarrollador Frontend especializado en Next y Nuxt',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(mono.className, 'mt-12')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
