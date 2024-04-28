"use client";
import { routes, routesModel } from "@/Routes/navigationRoutes";
import { GetActiveRoute } from "@/lib/useGetActive";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    
      <div className="space-y-4 py-4 flex flex-col h-full text-white bg-[#111827] w-full">
        <div className="px-3 py-2 flex-1">
          <Link href="/dashboard" className="flex items-center mb-14 gap-x-2">
            <Image alt="Logo" src="/aiIcon.png" width={50} height={50} />
            <h1 className=" text-2xl font-bold">Genius</h1>
          </Link>
          <div className="space-y-1">
            {routes.map((route: routesModel) => (
              <Link
                href={route.href}
                replace
                key={route.href}
                className={cn(
                  "p-3 cursor-pointer text-sm group flex justify-start w-full rounded-lg hover:bg-white/10 hover:text-white transition",
                  GetActiveRoute(route.href)
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route?.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

  );
}
