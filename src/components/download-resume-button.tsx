'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { H4 } from '~/components/typography';
import Link from 'next/link';

const TextVariants = {
  hover: {
    display: 'inline-block',
    opacity: 1,
  },
  initial: {
    display: 'none',
    opacity: 0,
  },
};

const ButtonVariants = {
  hover: {
    padding: '0.5rem 1.5rem',
    width: 'auto',
  },
  initial: {
    width: 'auto',
    padding: '0.5rem 1rem',
  },
}

const RESUME_URL =
  'https://drive.google.com/file/d/1h5kHLukIHtrX28PjcLZYWLcwamim41Bl/view?usp=sharing';

export const ResumeDownloadButton: React.FC = () => {
  return (
    <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer">
      <motion.button
        initial="initial"
        whileHover="hover"
        variants={ButtonVariants}
        transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 300 }}
        className="fixed bottom-5 right-5 flex h-14 cursor-pointer items-center overflow-hidden rounded-full border-2 border-border/20 bg-orange-200/85 text-primary-foreground shadow-lg shadow-orange-200/50 hover:bg-orange-200"
      >
        <FileDown size={24} />

        <motion.span
          variants={TextVariants}
          transition={{ duration: 0.1 }}
          className="ml-2 whitespace-nowrap"
        >
          <H4>Resume PDF</H4>
        </motion.span>
      </motion.button>
    </Link>
  );
};
