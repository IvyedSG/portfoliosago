'use client';

import { ImageCarousel } from '~/components/image-carousel';
import { FaGithub, FaLinkedin, FaInstagram, } from 'react-icons/fa';
import { FloatingDock } from '~/components/floating-dock';
import { H4 } from '~/components/typography';
import { useI18n } from '~/hooks/useI18n';

export function Introduction() {
  const { t } = useI18n();

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-between md:flex-row md:gap-8 max-w-6xl w-full">
        <div className="w-full md:w-auto md:flex-shrink-0">
          <ImageCarousel
            items={[
              {
                id: 1,
                title: t('hero.name'),
                image: '/wa.webp',
              },
              {
                id: 2,
                title: t('hero.name'),
                image: '/giphy.gif',
              },
            ]}
          />
        </div>
        <div className="pt-6 md:pt-0 md:pl-8 flex-1 max-w-xl">
          <H4 className="leading-8 text-justify font-semibold text-secondary-foreground">
            {t('about.introduction')}
          </H4>
          <div className="mt-6">
            <FloatingDock
              items={[
                {
                  title: t('social.github'),
                  icon: <FaGithub className="size-5 md:size-10" />,
                  href: 'https://github.com/IvyedSG',
                },
                {
                  title: t('social.linkedin'),
                  icon: <FaLinkedin className="size-5 md:size-10" />,
                  href: 'https://linkedin.com/in/deyvisanchez',
                },
                {
                  title: t('social.instagram'),
                  icon: <FaInstagram className="size-5 md:size-10" />,
                  href: 'https://www.instagram.com/dsagx16_/',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
