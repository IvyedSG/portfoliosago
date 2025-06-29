import { Metadata } from 'next';
import { Introduction } from './_components/introduction';

export const metadata: Metadata = {
  title: 'About Me | Sago',
  description: 'I am a frontend developer who loves to build things for the web.',
};

export default function AboutMe() {
  return (
    <main className="flex justify-center px-4 md:container">
      <section className="flex h-[calc(100vh-48px)] w-full max-w-3xl flex-col">
        <Introduction />
        
      </section>
    </main>
  );
}
