"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function CardsList() {
  const colours = [
    "bg-stone-800",
    "bg-stone-700",
    "bg-stone-600",
    "bg-stone-500",
  ];

  let [cardList, setCardList] = useState([
    {
      id: 1,
      title: "NAME 1",
      imagePath: "placeholder.png",
      description:
        "brbgurbguoire hb giuoh guerbgupreooh  hrouhgoerhgourehgoure ghreougherghroe gsefkhwbfjhwef fbewhf grhbghre bhrkebgfherbjhfbrehj",
    },
    {
      id: 2,
      title: "NAME 2",
      imagePath: "placeholder.png",
      description: "brbgurbguoire hb giuoh guerbgupreooh",
    },
    {
      id: 3,
      title: "NAME 3",
      imagePath: "placeholder.png",
      description: "brbgurbguoire hb giuoh guerbgupreooh",
    },
  ]);

  const switchCurrentCard = (newCardIndex) => {
    let newCardsList = [...cardList];
    let [newCard] = newCardsList.splice(newCardIndex, 1);
    newCardsList.unshift(newCard);
    setCardList(newCardsList);
  };

  return (
    <div
      className="overflow-hidden relative w-full h-screen"
      onScroll={(e) => {
        console.log("scrolling");
        switchCurrentCard(1);
      }}
    >
      {cardList.map((card, i) => {
        const z = cardList.length - i;

        return (
          <motion.div
            key={card.id}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              zIndex: z,
            }}
            animate={{
              scale: 1 - 0.01 * i,
              top: `${10 - 2 * i}vh`,
              left: `${25 + 10 * i}%`,
              rotateZ: 0,
            }}
            whileHover={i !== 0 ? { rotateZ: 8, scale: 1.05 } : {}}
            className={`max-w-[500px] absolute w-[50%] h-[80vh] ${colours[i]} rounded-3xl text-white`}
            onClick={() => {
              switchCurrentCard(i);
            }}
          >
            <h1 className="text-center text-4xl font-bold mt-5 text-highlight">
              {card.title}
            </h1>
          </motion.div>
        );
      })}
    </div>
  );
}
