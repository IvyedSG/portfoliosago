import { ChevronDown } from 'lucide-react';
import { ProjectCard } from '~/components/project-card';
import { H2, P } from '~/components/typography';
import { Button } from '~/components/ui/button';
import githubData from '../../../../../data/github-data.json';
import Link from 'next/link';

export function InterestsAndGoals() {
  const topRepositories = githubData.data?.user?.topRepositories?.nodes || [];

  // Filter out any null or invalid repository objects
  const validRepositories = topRepositories.filter(
    (repo): repo is NonNullable<typeof repo> => 
      repo !== null && typeof repo === 'object' && 'stargazerCount' in repo
  );

  const sortedRepositories = validRepositories
    .sort((a, b) => (b.stargazerCount || 0) - (a.stargazerCount || 0))
    .slice(0, 2);

  return (
    <div className="py-20">
      <H2 className="w-full text-center">Interests and Goals</H2>
      <div className="mb-10">
        <P className="text-center text-sm text-secondary-foreground">
          {"I'm passionate about contributing to open source and enjoy crafting weekend projects, fueling my creativity and technical growth."}
        </P>
        <P className="text-center text-sm text-secondary-foreground">
          {"Here are the top open-source projects I've contributed to."}
        </P>
        <div>
          {sortedRepositories.map((repo, index) => (
            <ProjectCard key={index} {...repo} />
          ))}
        </div>
        <div className="mb-2 flex justify-center">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="rounded-full">
              View All Projects
              <ChevronDown size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}