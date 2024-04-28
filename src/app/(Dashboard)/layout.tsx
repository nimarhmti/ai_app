import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: Props) {
  return (
    <div className="h-screen relative">
      <div className="h-full bg-gray-900 hidden md:flex md:fixed md:w-72 md:inset-y-0 z-[80]">
        <Sidebar />
      </div>
      <main className="md:pl-72 h-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
