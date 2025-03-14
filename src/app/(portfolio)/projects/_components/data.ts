import { Project } from './types';

export const projects: Project[] = [
  {
    name: 'Repify',
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
    name: 'Attendance Superlearner',
    description:
      'Page to take student attendance with a modern design, management of sessions, courses, teachers and administrators of the Superlearner organization',
    images: [
      '/sl1.webp',
      '/sl2.webp',
      '/sl3.webp',
      '/sl4.webp',
      '/sl5.webp',
    ],
    technologies: ['ViteJS', 'React', 'Cloud', 'Docker', 'Material UI'],
    githubUrl: '#',
    demoUrl: '#',
  },
  // {
  //   name: 'Terminal Portfolio',
  //   description: 'Personal portfolio with the theme, design and characteristics of a terminal',
  //   images: [
  //     '/terminal1.webp',
  //     '/terminal2.webp',
  //     '/terminal3.webp',
  //     '/terminal4.webp',
  //   ],
  //   technologies: ['NextJS', 'Tailwind CSS', 'TypeScript', 'React'],
  //   githubUrl: 'https://github.com/IvyedSG/terminal-portfolio.git',
  //   demoUrl: '#',
  // },
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
