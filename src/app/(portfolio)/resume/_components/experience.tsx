import Image from 'next/image';
import { H3 } from '~/components/typography';
import { getRelativeDate } from '~/lib/date';

export function Experience() {
  return (
    <section className="rounded-lg bg-primary/5 p-3 md:p-4 md:px-6">
      <table>
        <tbody>
          {/* Primer tr */}
          <tr className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:gap-0">
            <div className="flex items-center gap-4 md:flex-row">
              <td>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResAetXT8pKefaFRnrJRDL4GH52nwqUZQz4A&s"
                  alt="Superlearner Logo"
                  width={50}
                  height={50}
                  className="rounded-md bg-white/95 opacity-90"
                />
              </td>
              <td className="text-sm md:w-[300px] md:px-3 md:text-lg">
                <H3 className="text-sm md:text-2xl">Superlearner Peru</H3>
                <p className="text-sm md:text-lg">(Frontend Developer)</p>
              </td>
            </div>
            <td className="text-sm text-muted-foreground md:text-lg">
              <p>Feb 2024 - Present</p>
              <p>{getRelativeDate(new Date('2024-02-08'))}</p>
            </td>
          </tr>
          
        
        </tbody>
      </table>
    </section>
  );
}
