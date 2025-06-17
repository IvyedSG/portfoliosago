import { ContactForm } from './_components/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Deyvi',
  description: 'Contáctame para discutir oportunidades, proyectos o consultas sobre desarrollo web.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="flex min-h-screen items-center justify-center py-20">
          <div className="w-full max-w-3xl rounded-lg border-primary/50 px-6 py-6 md:border-2 md:bg-primary/5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
