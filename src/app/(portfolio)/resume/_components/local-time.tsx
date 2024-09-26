'use client';
import { MoonIcon, SunMedium, SunriseIcon, SunsetIcon } from 'lucide-react';
import { Greet } from './greet';

export function LocalTime() {
  const time = new Date().toLocaleTimeString('en-PE', {
    timeZone: 'America/Lima',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const hour = Number(time.split(':')[0]);
  const am = time.split(' ')[1]?.toLowerCase();  // Convertir 'AM/PM' en minúsculas para evitar errores

  const Time = () => {
    if (am === 'am') {
      // Noche: desde 12 AM hasta 4:59 AM
      if (hour >= 0 && hour < 5) {
        return {
          icon: () => <MoonIcon className="size-4 md:size-5" />,
          time: 'Night',
        };
      }
      // Mañana: desde 5 AM hasta 11:59 AM
      else if (hour >= 5 && hour < 12) {
        return {
          icon: () => <SunriseIcon className="size-4 md:size-5" />,
          time: 'Morning',
        };
      }
    } else {
      // Tarde: desde 12 PM hasta 4:59 PM
      if (hour === 12 || (hour >= 1 && hour < 5)) {
        return {
          icon: () => <SunMedium className="size-4 md:size-5" />,
          time: 'Afternoon',
        };
      }
      // Tardecer: desde 5 PM hasta 6:59 PM
      else if (hour >= 5 && hour < 7) {
        return {
          icon: () => <SunsetIcon className="size-4 md:size-5" />,
          time: 'Evening',
        };
      }
      // Noche: desde 7 PM hasta 11:59 PM
      else if (hour >= 7 && hour <= 11) {
        return {
          icon: () => <MoonIcon className="size-4 md:size-5" />,
          time: 'Night',
        };
      }
    }

    // Fallback por si alguna condición falla
    return {
      icon: () => <MoonIcon className="size-4 md:size-5" />,
      time: 'Night',
    };
  };

  const Icon = Time();

  return (
    <td className="flex items-center gap-2">
      America/Lima (UTC-5) - {time}
      <Greet icon={Icon.icon()} time={Icon.time} />
    </td>
  );
}
