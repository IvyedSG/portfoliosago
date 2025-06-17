'use client';

import { Button } from '~/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '~/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { SortDesc } from 'lucide-react';
import { H3 } from '~/components/typography';
import { useI18n } from '~/hooks/useI18n';

type SortDropdownProps = {
  sorting: string;
  onSortChange: (value: string) => void;
};

export function SortDropdown({ sorting, onSortChange }: SortDropdownProps) {
  const { t } = useI18n();

  return (
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
          {t('projects.sortProjects')}
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <H3 className="text-base font-semibold">{t('projects.sortBy')}</H3>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sorting} onValueChange={onSortChange}>
          <DropdownMenuRadioItem value="name">{t('projects.sortOptions.name')}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="technologies">{t('projects.sortOptions.technologies')}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}