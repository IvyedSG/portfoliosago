import { ResumeAccordion } from './_components/resume-accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Currículum | Deyvi',
  description: 'Currículum de Deyvi - Desarrollador Frontend especializado en React, Next.js y tecnologías modernas.',
};

export default function Resume() {
  return (
    <main className="bg-background px-4 text-foreground md:container pt-20">
      <section className="flex min-h-screen flex-col items-center justify-center">
        <ResumeAccordion />
      </section>
    </main>
  );
}
