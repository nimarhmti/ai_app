import {
  Code,
  ImageIcon,
  LayoutDashboard,
  LucideProps,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

export interface routesModel {
  label: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  color?: string;
  bgColor?: string;
}

// routes details class
export class RoutesDetails {
  Dashboard: routesModel = {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  };
  Conversation: routesModel = {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  };
  ImageGenerator: routesModel = {
    label: "Image Generator",
    href: "/images",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  };
  VideoGenerator: routesModel = {
    label: "Video Generator",
    href: "/video",
    icon: VideoIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  };
  MusicGenerator: routesModel = {
    label: "Music Generator",
    href: "/music",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  };
  CodeGenerator: routesModel = {
    label: "Code Generator",
    href: "/code",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  };
  Setting: routesModel = {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    color: "",
    bgColor: "",
  };
}
