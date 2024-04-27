import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      Dashboard (protected)
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
