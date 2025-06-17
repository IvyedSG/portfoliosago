'use client';

import { CopyableText } from '~/components/typography';
import { getRelativeDate } from '~/lib/date';
import { LocalTime } from './local-time';
import { useI18n } from '~/hooks/useI18n';

export function AboutMe() {
  const { t } = useI18n();

  return (
    <section className="rounded-lg bg-primary/5 py-2 pl-3 md:p-4 md:px-6">
      <div>
        <table className="text-xs text-secondary-foreground md:text-lg">
          <tbody>
            <tr>
              <td className="text-muted-foreground md:pr-4">{t('resume.personalInfo.name')}:</td>
              <td>Deyvi Sanchez</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">{t('resume.personalInfo.age')}:</td>
              <td>{getRelativeDate(new Date('2005-11-16'))}</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">{t('resume.personalInfo.nationality')}:</td>
              <td>Peruvian 🇵🇪</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">{t('resume.personalInfo.timezone')}:</td>
              <LocalTime />
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">{t('resume.personalInfo.languages')}:</td>
              <td>Spanish</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">{t('resume.personalInfo.email')}:</td>
              <td>
                <CopyableText>deyvioscarzanches@gmail.com</CopyableText>
              </td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">{t('resume.personalInfo.phone')}:</td>
              <td>
                <CopyableText>+51 908618955</CopyableText>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
