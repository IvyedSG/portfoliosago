import { Logo } from '~/components/navigation/logo';
import type { Metadata } from 'next';
import { LoaderCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio | Sago',
  description: 'I am a frontend developer who loves to build things for the web.',
};

export default function Home() {
  return (
    <main className="container bg-background text-foreground">
      <section className="flex h-[calc(100vh-48px)] flex-col items-center justify-center gap-5">
        <Logo className="z-10 animate-fadeIn text-5xl md:text-7xl" />
        <LoaderCircle className="z-10 size-20 animate-spin text-primary" />
      </section>
    </main>
  );
}
