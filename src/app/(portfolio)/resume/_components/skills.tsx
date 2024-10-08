import { FaDocker, FaGit, FaJs, FaPython, FaReact, FaGithub } from 'react-icons/fa';
import {  SiNextdotjs, SiTailwindcss, SiTypescript, SiVite, SiGooglecloud, SiShadcnui } from 'react-icons/si';

export function Skills() {
  return (
    <section className="rounded-lg bg-primary/5 p-3 md:p-4 md:px-6">
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        <div className="flex items-center justify-start gap-2 overflow-x-hidden text-sm font-semibold md:text-xl">
          <FaJs className="size-4 shrink-0 text-orange-200 md:size-8" />
          JavaScript
        </div>
        <div className="flex items-center justify-start gap-2 truncate text-ellipsis text-sm font-semibold md:text-xl">
          <SiTypescript className="size-3 shrink-0 text-orange-200 md:size-7" />
          TypeScript
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <SiVite className="size-4 text-orange-200 md:size-8" />
          Vite.js
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaReact className="size-4 text-orange-200 md:size-8" />
          React
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <SiNextdotjs className="size-3 text-orange-200 md:size-7" />
          Next.js
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaPython className="size-4 text-orange-200 md:size-8" />
          Python
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaGit className="size-4 text-orange-200 md:size-8" />
          Git
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <SiTailwindcss className="size-3 shrink-0 text-orange-200 md:size-7" />
          Tailwind
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaDocker className="size-4 text-orange-200 md:size-8" />
          Docker
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <FaGithub className="size-4 text-orange-200 md:size-8" />
          Github
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <SiGooglecloud className="size-4 text-orange-200 md:size-8" />
          Google Cloud
        </div>
        <div className="flex items-center justify-start gap-2 text-sm font-semibold md:text-xl">
          <SiShadcnui className="size-4 text-orange-200 md:size-8" />
          Shadcn
        </div>
      </div>
    </section>
  );
}
