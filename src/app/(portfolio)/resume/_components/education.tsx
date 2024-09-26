import { H3 } from '~/components/typography';
import Image from 'next/image';

export function Education() {
  return (
    <section className="rounded-lg bg-primary/5 p-2 px-4 md:p-4 md:px-6">
      <table>
        <tbody>
          <tr className="flex flex-col gap-2 md:flex-row md:gap-0">
            <span className="flex items-center gap-4 md:flex-row">
              <td className="rounded-md bg-white/90 p-2">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6y3Xhzl79plf-lqRW4l9gHh2W-MyqTxK-sA&s"
                  alt="Autónoma logo"
                  width={50}
                  height={50}
                  className="rounded-full opacity-90"
                />
              </td>
              <td className="text-sm md:px-3 md:text-lg">
                <H3 className="text-sm md:text-2xl">Autonomous University of Peru</H3>
                <p className="text-xs md:text-lg">(B. in software engineering)</p>
              </td>
            </span>
            <td className="text-sm text-muted-foreground md:text-lg">
              <p>Mar 2023 - Present</p>
              <p>Lima</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
