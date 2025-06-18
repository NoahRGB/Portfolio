"use client";

import { motion } from "motion/react";
import "./globals.css";
import Link from 'next/link';
import { ubuntu } from "@/app/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div className="w-1/2 max-w-[600px] bg-stone-800 h-fit pb-[5vh] m-auto mt-[30vh] text-white rounded-3xl"
    initial={{ marginTop: "-500px" }} animate={{ marginTop: "35vh" }} transition={{ duration: 2 }}>

      <div className="flex justify-around items-center">
        <motion.div className="pt-[5vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
          <h1 className={`${ubuntu.className} font-bold text-4xl text-highlight`}>NOAH COX</h1>
          <p>Making things sometimes</p>

          <div className="pt-1 flex flex-row justify-start">
            <motion.a className="w-fit p-1 origin-left" href="https://www.github.com/NoahRGB" target="_blank"
            whileHover={{ rotateX: 360 }} transition={{ duration: 1 }}>
                <Image src="/github-highlight.png" width={40} height={40} alt="github logo"/>
            </motion.a>
            
            <motion.a className="w-fit p-1 origin-left" href="mailto:ncox2004@gmail.com" target="_blank"
            whileHover={{ rotateX: 360 }} transition={{ duration: 1 }}>
                <Image className="ml-5" src="/mail-highlight1.png" width={40} height={40} alt="email button"/>
            </motion.a>

            <motion.a className="w-fit p-1 origin-left" href="https://www.google.com" target="_blank"
            whileHover={{ rotateX: 360 }} transition={{ duration: 1 }}>
                <Image className="ml-5" src="/linkedin-highlight.png" width={40} height={40} alt="linkedin logo"/>
            </motion.a>
          </div>

        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
          <h1>📍 UK</h1>
          <h1>✉️ ncox2004@gmail.com</h1>
        </motion.div>
        
      </div>

    </motion.div>
  );
}