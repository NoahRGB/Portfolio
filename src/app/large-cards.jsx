"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useScroll } from "motion/react";
import { AnimatePresence } from "motion/react";

export default function LargeCards({ toggleCards }) {
  const { scrollYProgress } = useScroll();

  const textOutlineAnims = {
    rest: {
      fill: "none",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hover: {
      fill: "#FFC145",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const buttonOutlineAnims = {
    rest: {
      border: "2px solid white",
      color: "white",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hover: {
      border: "2px solid #FFC145",
      color: "black",
      background: "#FFC145",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const cards = [
    {
      title: "RAY TRACING",
      imageSrc: "placeholder.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam consectetur, dolor mollitia ad, perspiciatis voluptatum nam ducimus odio quis ex itaque esse reprehenderit quibusdam distinctio officia eius voluptates? Rem, porro?",
    },
    {
      title: "RAY TRACING2",
      imageSrc: "placeholder.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam consectetur, dolor mollitia ad, perspiciatis voluptatum nam ducimus odio quis ex itaque esse reprehenderit quibusdam distinctio officia eius voluptates? Rem, porro?",
    },
  ];

  return (
    <div className="">
      <motion.button
        className="mt-5 ml-5 not-first:cursor-pointer flex flex-row items-center cursor-pointer
            text-left rounded-xl text-black bg-highlight font-bold pt-5 pb-5 pl-5 w-[100%] max-w-[180px]"
        onClick={() => toggleCards(false)}
        exit={{ marginLeft: 999 }}
      >
        <Image
          className="rotate-y-180"
          src="/right-arrow2.png"
          width={20}
          height={20}
          alt="left arrow"
        />
        <p className="ml-5">BACK</p>
      </motion.button>

      <AnimatePresence initial={false}>
        <motion.div
          whileHover="hover"
          animate="rest"
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="group cursor-pointer bg-radial from-test to-stone-800 w-[70%] m-auto max-w-[900px] h-fit xl:h-[50vh] p-[30px] mt-[10vh] rounded-2xl"
        >
          <div className="w-8/10">
            <svg className="w-fit h-[30%]" viewBox="0 0 250 35">
              <motion.text
                y="25"
                className="font-black text-3xl stroke-highlight stroke-1"
                variants={textOutlineAnims}
              >
                {cards[0].title}
              </motion.text>
            </svg>

            <p className="text-xl text-white w-full xl:w-4/7 xl:relative xl:-top-0 xl:left-90">
              {cards[0].description}
            </p>

            <Image
              src={`/${cards[0].imageSrc}`}
              className={`w-100 mt-5 md:rotate-z-355 xl:mt-0 md:relative md:left-60 xl:-left-20 xl:-top-30`}
              width={400}
              height={400}
              alt="placeholder"
            />

            <motion.button
              variants={buttonOutlineAnims}
              className="md:relative md:-top-50 xl:left-80 xl:-top-50 xl:m-auto mt-5 cursor-pointer flex flex-row justify-evenly items-center 
            text-left rounded-xl text-black font-bold pt-5 pb-5 pl-5 w-[100%] max-w-[180px]"
            >
              SEE MORE
              <Image
                className="ml-2"
                src="/right-arrow2.png"
                width={20}
                height={20}
                alt="right arrow"
              />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        whileHover="hover"
        animate="rest"
        className="group cursor-pointer bg-radial from-test to-stone-800 w-[70%] m-auto max-w-[900px] h-fit xl:h-[50vh] p-[30px] mt-[10vh] rounded-2xl"
      >
        <div className="w-8/10">
          <svg className="w-fit h-[30%]" viewBox="0 0 250 35">
            <motion.text
              y="25"
              className="font-black text-3xl stroke-highlight stroke-1"
              variants={textOutlineAnims}
            >
              {cards[1].title}
            </motion.text>
          </svg>

          <p className="text-xl text-white w-full xl:w-4/7 xl:relative xl:-top-0 xl:left-90">
            {cards[1].description}
          </p>

          <Image
            src={`/${cards[1].imageSrc}`}
            className={`w-100 mt-5 md:rotate-z-355 xl:mt-0 md:relative md:left-60 xl:-left-20 xl:-top-30`}
            width={400}
            height={400}
            alt="placeholder"
          />

          <motion.button
            variants={buttonOutlineAnims}
            className="md:relative md:-top-50 xl:left-80 xl:-top-50 xl:m-auto mt-5 cursor-pointer flex flex-row justify-evenly items-center 
            text-left rounded-xl text-black font-bold pt-5 pb-5 pl-5 w-[100%] max-w-[180px]"
          >
            SEE MORE
            <Image
              className="ml-2"
              src="/right-arrow2.png"
              width={20}
              height={20}
              alt="right arrow"
            />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
