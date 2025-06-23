"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ubuntu } from "@/app/fonts";
import Image from "next/image";

export default function SummaryCard({ toggleCards }) {
  return (
    <motion.div
      className="w-3/4 max-w-[600px] bg-radial from-test to-stone-800 h-fit pb-[5vh] m-auto mt-[30vh] text-white rounded-3xl"
      initial={{ marginTop: "-500px" }}
      animate={{ marginTop: "35vh" }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-around items-center sm:flex-row flex-col">
        <motion.div
          className="pt-[5vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h1
            className={`${ubuntu.className} font-bold text-4xl text-highlight`}
          >
            NOAH COX
          </h1>
          <p>Inspiring text here</p>

          <div className="pt-1 flex flex-row justify-start">
            <motion.a
              className="w-fit p-1 origin-left"
              href="https://www.github.com/NoahRGB"
              target="_blank"
              whileHover={{ rotateX: 360 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/github-highlight.png"
                width={40}
                height={40}
                alt="github logo"
              />
            </motion.a>

            <motion.a
              className="w-fit p-1 origin-left"
              href="mailto:ncox2004@gmail.com"
              target="_blank"
              whileHover={{ rotateX: 360 }}
              transition={{ duration: 1 }}
            >
              <Image
                className="ml-5"
                src="/mail-highlight1.png"
                width={40}
                height={40}
                alt="email button"
              />
            </motion.a>

            <motion.a
              className="w-fit p-1 origin-left"
              href="https://www.google.com"
              target="_blank"
              whileHover={{ rotateX: 360 }}
              transition={{ duration: 1 }}
            >
              <Image
                className="ml-5"
                src="/linkedin-highlight.png"
                width={40}
                height={40}
                alt="linkedin logo"
              />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="w-[50%] mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.button
            whileHover={{ rotateZ: -1 }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="cursor-pointer flex flex-row justify-evenly items-center text-left rounded-xl bg-highlight text-black font-bold pt-5 pb-5 pl-5 w-[100%] max-w-[180px] m-auto"
            onClick={() => toggleCards(true)}
          >
            SEE MORE{" "}
            <Image
              className="ml-2"
              src="/right-arrow2.png"
              width={20}
              height={20}
              alt="right arrow"
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
