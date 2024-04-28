import React from "react";
import { Menu } from "lucide-react";
import { Button } from "./button";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";
export default function Navbar() {
  return (
    <div className="p-4 flex items-center border-b ">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
