import { Project } from './types';

export const projects: Project[] = [
  {
    name: 'Repify',
    descriptionKey: 'projects.projectData.repify.description',
    description:
      'Repify is a bridge between students and interesting projects. Create, participate and learn with other students doing projects',
    images: [
      '/repify1.webp',
      '/repify2.webp',
      '/repify3.webp',
      '/repify4.webp',
      '/repify5.webp'
    ],
    technologies: ['NextJS', 'TypeScript', 'Shadcn', 'Amplify'],
    githubUrl: 'https://github.com/IvyedSG/repify-front.git',
    demoUrl: 'https://main.d15i3gj3zymvi2.amplifyapp.com/',
  },
  {
    name: 'Custodiapp',
    descriptionKey: 'projects.projectData.custodiapp.description',
    description:
      'An app that efficiently manages lockers, monitors users and items, and displays locker statuses and check-in and check-out history.',
    images: [
      '/custodia3.webp',
      '/custodia2.webp',
      '/custodia1.webp',
      '/custodia4.webp',
      '/custodia5.webp'
    ],
    technologies: ['NextJS', 'TypeScript', 'Shadcn', 'React', 'Vercel'],
    githubUrl: 'https://github.com/IvyedSG/custodiapp',
    demoUrl: 'https://custodiapp.vercel.app',
  },
  {
    name: 'Attendance Superlearner',
    descriptionKey: 'projects.projectData.attendance.description',
    description:
      'Page to take student attendance with a modern design, management of sessions, courses, teachers and administrators of the Superlearner organization',
    images: [
      '/sl2.webp',
      '/sl1.webp',
      '/sl3.webp',
      '/sl4.webp',
      '/sl5.webp',
    ],
    technologies: ['ViteJS', 'React', 'Cloud', 'Docker', 'Material UI'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    name: 'Forua',
    descriptionKey: 'projects.projectData.forua.description',
    description:
      'A complete forum especially made for students with the feature of viewing and rating teachers.',
    images: ['/forua.webp'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/IvyedSG/Forua.git',
    demoUrl: 'https://youtu.be/bcyCCDkTIts',
  },
];
