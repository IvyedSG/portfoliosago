'use client';

import { MobileNav } from './mobile-nav';
import NavTabs from './nav-tabs';
import { LanguageSwitcher } from '~/components/language-switcher';
import { useI18n } from '~/hooks/useI18n';

export type NavItem = {
  label: string;
  pathname: string;
};

export function Navbar() {
  const { t } = useI18n();

  const NavItems: NavItem[] = [
    {
      label: t('navigation.about'),
      pathname: '/about-me',
    },
    {
      label: t('navigation.resume'),
      pathname: '/resume',
    },
    {
      label: t('navigation.projects'),
      pathname: '/projects',
    },
    {
      label: t('navigation.contact'),
      pathname: '/contact',
    },
  ];

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Spacer for mobile */}
        <div className="w-8 md:w-0" />
        
        {/* Navigation items - centered */}
        <div className="flex items-center justify-center">
          <NavTabs tabs={NavItems} />
          <MobileNav tabs={NavItems} />
        </div>
        
        {/* Language switcher - right aligned */}
        <div className="flex items-center justify-end">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
