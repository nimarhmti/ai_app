import { routesModel } from "@/Routes/navigationRoutes";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
interface toolsModel extends routesModel {
  bgColor: string;
}
export const routes: toolsModel[] = [
  {
    label: "dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
    bgColor: "text-sky-500/10",
  },
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "text-violet-500/10",
  },
  {
    label: "Image Generator",
    href: "/images",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "text-pink-700/10",
  },
  {
    label: "Video Generator",
    href: "/video",
    icon: VideoIcon,
    color: "text-orange-500",
    bgColor: "text-orange-500/10",
  },
  {
    label: "music Generator",
    href: "/music",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "text-emerald-500/10",
  },
  {
    label: "code Generator",
    href: "/code",
    icon: Code,
    color: "text-green-700",
    bgColor: "text-green-700/10",
  },
  //   {
  //     label: "Settings",
  //     href: "/settings",
  //     icon: Settings,
  //     // color: "text-green-700",
  //     bg-
  //   },
];
