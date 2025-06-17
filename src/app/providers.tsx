import {
    TooltipProvider,
  } from "~/components/ui/tooltip"
  import { Toaster } from "~/components/ui/toaster"
  import { Analytics } from '@vercel/analytics/react';
  import { SpeedInsights } from '@vercel/speed-insights/next';
  import { I18nProvider } from '~/components/i18n-provider';

export function Providers(
    {children}: {children: React.ReactNode}
){
    return (
      <I18nProvider>
        <TooltipProvider>
          {children}
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </TooltipProvider>
      </I18nProvider>
    );
}