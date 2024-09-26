'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { A, H1, H3, P } from '~/components/typography';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { FaGithub } from 'react-icons/fa6';
import { SortDesc, ExternalLink, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';

type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
};

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills, built with modern web technologies and featuring a responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "https://yourportfolio.com"
  },
  {
    name: "E-commerce Platform",
    description: "A full-stack e-commerce solution with product management, user authentication, and a sleek, intuitive interface for seamless online shopping experiences.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Redux", "Stripe API", "Docker"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    demoUrl: "https://yourecommerce.com"
  },
  {
    name: "Weather App",
    description: "A dynamic weather application providing real-time weather data for any location, featuring interactive maps and detailed forecasts.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["JavaScript", "React", "OpenWeatherMap API", "Leaflet.js", "CSS3", "HTML5"],
    githubUrl: "https://github.com/yourusername/weather-app",
    demoUrl: "https://yourweatherapp.com"
  },
  // Add more projects as needed
];

const emojiCursor = () => {
  const emojis = ['🚀', '💻', '🎨', '🔧', '🌟'];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  return `cursor-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><text y="28" font-size="24">${emoji}</text></svg>'), auto]`;
};

export function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchQuery, setSearchQuery] = useState('');
  const [sorting, setSorting] = useState('name');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cursorEmoji, setCursorEmoji] = useState(emojiCursor());

  const sortProjects = useCallback((sorting: string) => {
    setSorting(sorting);
    switch (sorting) {
      case 'name':
        setFilteredProjects([...projects].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case 'technologies':
        setFilteredProjects([...projects].sort((a, b) => b.technologies.length - a.technologies.length));
        break;
      default:
        break;
    }
  }, []);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchQuery = e.target.value.toLowerCase().trimStart();
      setSearchQuery(searchQuery);
      setFilteredProjects(
        projects.filter((project) => {
          return (
            project.name.toLowerCase().includes(searchQuery) ||
            project.description.toLowerCase().includes(searchQuery) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchQuery))
          );
        })
      );
    },
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorEmoji(emojiCursor());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`flex justify-center px-4 md:container ${cursorEmoji}`}>
      <section className="mt-10 flex w-full max-w-4xl flex-col">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <H1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Projects</H1>
          <P className="mt-2 text-lg">Explore my creative journey through code and design.</P>
          <p className="py-1">
            <A href="https://github.com/IvyedSG" className="text-sm inline-flex items-center hover:scale-105 transition-transform">
              <FaGithub className="mr-2 inline-block flex-shrink-0" />
              View all projects on Github
            </A>
          </p>
        </motion.div>
        <motion.div 
          className="mt-4 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="secondary" className="hover:rotate-180 transition-transform duration-300">
                    <SortDesc className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent sideOffset={5} side="top" align="center">
                Sort Projects
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                <H3 className="text-base font-semibold">Sort By</H3>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sorting} onValueChange={sortProjects}>
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="technologies">Technologies</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            placeholder="Search projects"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full border-2 border-primary/50 text-xl focus:ring-4 focus:ring-primary/30 transition-all duration-300"
          />
        </motion.div>
        {searchQuery.length > 0 && (
          <P className="text-center text-secondary-foreground mt-2">
            Showing results for {`'${searchQuery}'`}
          </P>
        )}
        <motion.div 
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.length === 0 ? (
            <motion.div 
              className="col-span-full p-10 text-center text-lg font-bold text-secondary-foreground opacity-75 md:text-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <H3>{'No projects found :('}</H3>
            </motion.div>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <H3 className="text-lg font-semibold mb-2">{project.name}</H3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span key={techIndex} className="inline-flex items-center rounded-full bg-primary/80 px-2 py-0.5 text-xs font-medium text-primary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="mt-2 hover:bg-secondary/80"
                        onClick={() => setSelectedProject(project)}
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle>{project.name}</DialogTitle>
                        <DialogDescription>
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <A href={project.githubUrl} className="text-sm inline-flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="mr-2 h-5 w-5" />
                            View on GitHub
                          </A>
                          <A href={project.demoUrl} className="text-sm inline-flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Live Demo
                          </A>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </section>
    </main>
  );
}