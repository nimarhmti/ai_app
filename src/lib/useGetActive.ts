import { usePathname } from "next/navigation";
export const GetActiveRoute = (route: string) => {
  const currentRoute = usePathname();
  const result = route === currentRoute ? "bg-white/10 text-white" : "";
  return result;
};
