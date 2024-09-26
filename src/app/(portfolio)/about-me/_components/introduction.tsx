import { ImageCarousel } from '~/components/image-carousel';
import { FaGithub, FaLinkedin, FaInstagram, } from 'react-icons/fa';
import { FloatingDock } from '~/components/floating-dock';
import { H4 } from '~/components/typography';

export function Introduction() {
  return (
    <table className="relative flex min-h-screen items-center justify-center md:mt-0">
      <tbody>
        <tr className="flex flex-col items-center justify-between md:flex-row md:gap-4">
          <td className="w-fit">
            <ImageCarousel
              items={[
                {
                  id: 1,
                  title: 'Deyvi',
                  image: '/wa.webp',
                },
                {
                  id: 2,
                  title: 'deyvi',
                  image: '/giphy.gif',
                },
              ]}
            />
          </td>
          <td className="pt-3 text-justify font-semibold text-secondary-foreground md:pl-10 md:pt-0">
            <H4 className="leading-8">
              {
                "Hello! I'm Deyvi, also known as Sago, depending on where you know me from. I'm a frontend developer based in Peru with a passion for building web applications. I have expertise in Vite.js, Next.js, React, JavaScript, HTML & CSS, and I'm also well-versed Python. Currently, I work as a Web Developer at NeonHouseLed."
              }
            </H4>
            <FloatingDock
              items={[
                {
                  title: 'GitHub',
                  icon: <FaGithub className="size-5 md:size-10" />,
                  href: 'https://github.com/IvyedSG',
                },
                {
                  title: 'LinkedIn',
                  icon: <FaLinkedin className="size-5 md:size-10" />,
                  href: 'https://linkedin.com/in/deyvisanchez',
                },
                {
                  title: 'Instagram',
                  icon: <FaInstagram className="size-5 md:size-10" />,
                  href: 'https://www.instagram.com/dsagx16_/',
                },
                
              ]}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
