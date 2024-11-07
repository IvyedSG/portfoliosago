'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { A, H1, H3, P } from '~/components/typography';
import { Input } from '~/components/ui/input';
import { FaGithub } from 'react-icons/fa6';
import { Project } from './types';
import { projects } from './data';
import { emojiCursor } from './utils';
import { ProjectCard } from './ProjectCard';
import { SortDropdown } from './SortDropdown';

export function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchQuery, setSearchQuery] = useState('');
  const [sorting, setSorting] = useState('name');
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
          <SortDropdown sorting={sorting} onSortChange={sortProjects} />
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
          className="mt-8 grid gap-8"
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
              <ProjectCard key={index} project={project} />
            ))
          )}
        </motion.div>
      </section>
    </main>
  );
}