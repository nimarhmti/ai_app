import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function layout({ children }: Props) {
  return (
    <div className="h-screen  w-full flex items-center justify-center bg-red-400">
      {children}
    </div>
  );
}
