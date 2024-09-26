import { CopyableText } from '~/components/typography';
import { getRelativeDate } from '~/lib/date';
import { LocalTime } from './local-time';

export function AboutMe() {
  return (
    <section className="rounded-lg bg-primary/5 py-2 pl-3 md:p-4 md:px-6">
      <div>
        <table className="text-xs text-secondary-foreground md:text-lg">
          <tbody>
            <tr>
              <td className="text-muted-foreground md:pr-4">Name:</td>
              <td>Deyvi Sanchez</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Age:</td>
              <td>{getRelativeDate(new Date('2005-11-16'))}</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Nationality:</td>
              <td>Peruvian 🇵🇪</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Timezone:</td>
              <LocalTime />
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Languages:</td>
              <td>Spanish</td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Email:</td>
              <td>
                <CopyableText>deyvioscarzanches@gmail.com</CopyableText>
              </td>
            </tr>
            <tr>
              <td className="text-muted-foreground md:pr-4">Phone Number:</td>
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
