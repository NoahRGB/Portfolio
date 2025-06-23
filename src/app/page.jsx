"use client";

import "./globals.css";
import { motion } from "motion/react";
import SummaryCard from "@/app/summary-card";
import CardsList from "@/app/cards-list";
import LargeCards from "@/app/large-cards";
import { useState } from "react";

export default function Home() {
  let [showCards, setShowCards] = useState(false);

  return (
    <div className="w-full h-full">
      {!showCards && <SummaryCard toggleCards={setShowCards} />}
      {showCards && <LargeCards toggleCards={setShowCards} />}
    </div>
  );
}
