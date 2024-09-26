'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { toast } from '~/components/ui/use-toast';
import { Greet as GreetIcon } from '~/components/animated-icon';

type GreetProps = {
  time: string; // Esto será "Morning", "Afternoon", etc.
  icon: React.ReactNode;
};

export function Greet({ time, icon }: GreetProps) {
  const onClickGreet = (time: string) => {
    toast({
      title: `Good ${time}!`, // Aquí debería mostrar "Good Afternoon!" por ejemplo
      icon: GreetIcon(),
    });
  };
  return (
    <Tooltip>
      <TooltipTrigger className="hidden md:inline-block" onClick={() => onClickGreet(time)}>
        {icon}
      </TooltipTrigger>
      <TooltipContent>{time}</TooltipContent>
    </Tooltip>
  );
}
