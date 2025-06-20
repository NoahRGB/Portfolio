"use client";

import Worms from "@/app/worms";
import SummaryCard from "@/app/summary-card";

export default function Home() {
  return (
    <div className="">
      <Worms />

      <SummaryCard toggleCards={() => {}} />
    </div>
  );
}
