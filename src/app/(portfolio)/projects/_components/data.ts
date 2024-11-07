import { Project } from './types';

export const projects: Project[] = [
  {
    name: 'Repify',
    description:
      'Repify is a bridge between students and interesting projects. Create, participate and learn with other students doing projects',
    images: [
      '/repify1.png',
      '/repify2.png',
      '/repify3.png',
      '/repify4.png',
      '/repify5.png'
    ],
    technologies: ['NextJS', 'TypeScript', 'Shadcn', 'Amplify'],
    githubUrl: 'https://github.com/IvyedSG/repify-front.git',
    demoUrl: 'https://main.d15i3gj3zymvi2.amplifyapp.com/',
  },
  {
    name: 'Attendance Superlearner',
    description:
      'Page to take student attendance with a modern design, management of sessions, courses, teachers and administrators of the Superlearner organization',
    images: [
      '/sl1.png',
      '/sl2.png',
      '/sl3.png',
      '/sl4.png',
      '/sl5.png',
    ],
    technologies: ['ViteJS', 'React', 'Cloud', 'Docker', 'Material UI'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    name: 'Terminal Portfolio',
    description: 'Personal portfolio with the theme, design and characteristics of a terminal',
    images: [
      '/terminal1.png',
      '/terminal2.png',
      '/terminal3.png',
      '/terminal4.png',
    ],
    technologies: ['NextJS', 'Tailwind CSS', 'TypeScript', 'React'],
    githubUrl: 'https://github.com/IvyedSG/terminal-portfolio.git',
    demoUrl: '#',
  },
  {
    name: 'Forua',
    description:
      'A complete forum especially made for students with the feature of viewing and rating teachers.',
    images: ['/forua.webp'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/IvyedSG/Forua.git',
    demoUrl: 'https://youtu.be/bcyCCDkTIts',
  },
];
