'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { H3, P } from '~/components/typography';
import { Button } from '~/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import { ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from './types';
import { useI18n } from '~/hooks/useI18n';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useI18n();
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState('');

  const handleZoom = (image: string) => {
    setZoomedImage(image);
    setIsZoomOpen(true);
  };

  const getProjectDescription = () => {
    return project.descriptionKey ? t(project.descriptionKey) : project.description;
  };

  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      className="bg-card shadow-lg rounded-lg overflow-hidden"
    >
      <Carousel 
        showThumbs={false} 
        showStatus={false} 
        infiniteLoop 
        useKeyboardArrows
        renderArrowPrev={(clickHandler, hasPrev) => (
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70"
            onClick={clickHandler}
            disabled={!hasPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70"
            onClick={clickHandler}
            disabled={!hasNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      >
        {project.images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`${project.name} - Image ${index + 1}`} className="w-full h-64 object-cover" />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => handleZoom(image)}
            >
              <ZoomIn className="h-4 w-4" />
              <span className="sr-only">Zoom image</span>
            </Button>
          </div>
        ))}
      </Carousel>
      <div className="p-4">
        <H3 className="text-lg font-semibold mb-2">{project.name}</H3>
        <P className="text-sm mb-4">{getProjectDescription()}</P>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="inline-flex items-center rounded-full bg-primary/80 px-2 py-0.5 text-xs font-medium text-primary-foreground">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a href={project.githubUrl} 
          className={`text-sm inline-flex items-center ${project.name === "Terminal Portfolio" || project.name === "Attendance Superlearner"  ? 'pointer-events-none opacity-50' : 'hover:underline'}`} 
          target="_blank" 
          rel="noopener noreferrer">
            <FaGithub className="mr-2 h-5 w-5" />
            {t('projects.viewCode')}
          </a>
          <a 
            href={project.demoUrl} 
            className={`text-sm inline-flex items-center ${project.name === "Terminal Portfolio" || project.name === "Attendance Superlearner"  ? 'pointer-events-none opacity-50' : 'hover:underline'}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            {t('projects.demo')}
          </a>
        </div>
      </div>
      {isZoomOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-[95vw] h-[90vh]">
            <img 
              src={zoomedImage} 
              alt="Zoomed project image" 
              className="w-full h-full object-contain"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70"
              onClick={() => setIsZoomOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close zoom</span>
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}