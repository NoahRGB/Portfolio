"use client";

import "./globals.css";
import SummaryCard from "@/app/summary-card";
import CardsList from "@/app/cards-list";
import { useState } from "react";

export default function Home() {
  let [showCards, setShowCards] = useState(false);

  return (
    <div className="">
      {!showCards && <SummaryCard toggleCards={setShowCards} />}

      {showCards && <CardsList />}
    </div>
  );
}
