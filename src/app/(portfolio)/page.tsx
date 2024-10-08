import { Hero } from './_components/hero';
import type { Metadata } from 'next';
// import { A } from '~/components/typography';

export const metadata: Metadata = {
  title: 'Portfolio | Sago',
  description: 'I am a frontend developer who loves to build things for the web.',
};

export default function Home() {
  return (
    <main className="container bg-background text-foreground">
      <section className="flex h-[calc(100vh-48px)] flex-col items-center justify-center overflow-hidden">
        {/* <p className="my-2 flex items-center gap-2">Read my blogs here <A href="/blogs">Blogs</A>
      </p> */}
        <Hero />
      </section>
    </main>
  );
}
