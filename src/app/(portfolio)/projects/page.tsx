import { Metadata } from 'next';
import { Projects } from './_components/projects';

export const metadata: Metadata = {
  title: 'Proyectos | Deyvi',
  description:
    'Una colección de mis proyectos más recientes desarrollados con tecnologías modernas como React, Next.js y TypeScript.',
};

export default function ProjectsPage() {
  return (
    <main>
      <Projects />
    </main>
  );
}
