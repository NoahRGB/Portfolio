"use client";

import Canvas from "@/app/canvas";
import SummaryCard from "@/app/summary-card";

export default function Home() {
  return (
    <div className="">
      <div className="z-[-1] absolute left-0 top-0 blur-[3px]">
        <Canvas />
      </div>

      <SummaryCard toggleCards={() => {}} />
    </div>
  );
}
