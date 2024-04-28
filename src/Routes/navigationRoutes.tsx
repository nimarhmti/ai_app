import {
  LayoutDashboard,
  LucideProps,
  ImageIcon,
  MessageSquare,
  VideoIcon,
  Music,
  Code,
  Settings,
} from "lucide-react";
import React from "react";

export interface routesModel {
  label: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  color?: string;
}

export const routes: routesModel[] = [
  {
    label: "dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
  },
  {
    label: "Image Generator",
    href: "/images",
    icon: ImageIcon,
    color: "text-pink-700",
  },
  {
    label: "Video Generator",
    href: "/video",
    icon: VideoIcon,
    color: "text-orange-500",
  },
  {
    label: "music Generator",
    href: "/music",
    icon: Music,
    color: "text-emerald-500",
  },
  {
    label: "code Generator",
    href: "/code",
    icon: Code,
    color: "text-green-700",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    // color: "text-green-700",
  },
];
