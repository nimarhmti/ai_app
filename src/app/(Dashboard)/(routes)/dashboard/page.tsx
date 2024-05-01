"use client";
import React from "react";
import { tools, toolsModel } from "./tools/tools";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4 pt-3">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of The AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the Smartest AI - Experience the power of the AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool: toolsModel) => (
          <Card
            key={tool.href}
            className="p-4 border-black/5 transition cursor-pointer hover:shadow-md flex items-center justify-between"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("w-fit p-2 rounded-md ", tool.bgColor)}>
                <tool.icon className={cn(tool.color)} />
              </div>
              <p>{tool.label}</p>
            </div>
            <ArrowRight className="h-5 w-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
