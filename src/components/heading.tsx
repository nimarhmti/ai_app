import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import React from "react";
interface Props {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  iconColor?: string;
  bgColor?: string;
}
export default function Heading({
  title,
  Icon,
  iconColor,
  bgColor,
  description,
}: Props) {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div className={cn("w-fit rounded-lg  p-1", bgColor)}>
        <Icon className={cn(iconColor, "w-10 h-10")} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
