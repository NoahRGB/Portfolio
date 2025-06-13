"use client";

import { motion } from "motion/react";
import { linearGradient } from "motion/react-client";
import "./globals.css";
import { edu, ubuntu } from "@/app/fonts";
import Image from "next/image";

const redGlow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px rgb(255, 0, 0), 0 0 40px rgb(255, 0, 0), 0 0 50px rgb(255, 0, 0), 0 0 60px rgb(255, 0, 0), 0 0 70px rgb(255, 0, 0)";
const whiteGlow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255), 0 0 50px rgb(255, 255, 255), 0 0 60px rgb(255, 255, 255), 0 0 70px rgb(255, 255, 255)";
const wormDuration = 10;

export default function Home() {
  return (
    <div className="">
      
      <div className="pointer-events-none z-0 blur w-screen h-screen absolute overflow-hidden top-0 left-0">
        
        <svg transform="rotate(25)" className="absolute -top-50 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -53.178 426.43 C -25.26 431.379 -5.624 429.816 12.97 432.915 C 42.395 432.915 63.356 431.662 86.9 426.43 C 110.88 420.309 122.595 407.981 134.241 394.005 C 146.433 375.718 154.088 361.055 159.533 344.718 C 165.833 323.319 166.786 303.969 168.612 285.704 C 168.612 260.732 177.274 245.606 184.825 227.987 C 201.204 205.963 216.072 195.738 236.057 189.076 C 277.045 185.042 309.487 189.276 342.412 197.507 C 382.16 209.036 413.302 218.502 444.228 227.338 C 481.443 238.156 508.397 238.363 537.613 238.363 C 565.016 234.598 583.273 219.292 598.573 203.992 C 616.491 185.426 623.149 167.743 635.538 155.354 L 636.835 154.057 C 636.835 153.573 637.484 153.243 637.484 152.76"></path>
          </defs>
          <text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre"}}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: wormDuration, ease: "linear", repeatType: "reverse", repeat: Infinity}} href="#path-0">==============================================</motion.textPath>
          </text>
        </svg>

        <svg transform="rotate(350)" className="absolute top-1/4 left-1/4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -53.178 426.43 C -25.26 431.379 -5.624 429.816 12.97 432.915 C 42.395 432.915 63.356 431.662 86.9 426.43 C 110.88 420.309 122.595 407.981 134.241 394.005 C 146.433 375.718 154.088 361.055 159.533 344.718 C 165.833 323.319 166.786 303.969 168.612 285.704 C 168.612 260.732 177.274 245.606 184.825 227.987 C 201.204 205.963 216.072 195.738 236.057 189.076 C 277.045 185.042 309.487 189.276 342.412 197.507 C 382.16 209.036 413.302 218.502 444.228 227.338 C 481.443 238.156 508.397 238.363 537.613 238.363 C 565.016 234.598 583.273 219.292 598.573 203.992 C 616.491 185.426 623.149 167.743 635.538 155.354 L 636.835 154.057 C 636.835 153.573 637.484 153.243 637.484 152.76"></path>
          </defs>
          <text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre"}}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: wormDuration, delay: 1, ease: "linear", repeatType: "reverse", repeat: Infinity}} href="#path-0">==================================================</motion.textPath>
          </text>
        </svg>

        <svg transform="rotate(180)" className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -53.178 426.43 C -25.26 431.379 -5.624 429.816 12.97 432.915 C 42.395 432.915 63.356 431.662 86.9 426.43 C 110.88 420.309 122.595 407.981 134.241 394.005 C 146.433 375.718 154.088 361.055 159.533 344.718 C 165.833 323.319 166.786 303.969 168.612 285.704 C 168.612 260.732 177.274 245.606 184.825 227.987 C 201.204 205.963 216.072 195.738 236.057 189.076 C 277.045 185.042 309.487 189.276 342.412 197.507 C 382.16 209.036 413.302 218.502 444.228 227.338 C 481.443 238.156 508.397 238.363 537.613 238.363 C 565.016 234.598 583.273 219.292 598.573 203.992 C 616.491 185.426 623.149 167.743 635.538 155.354 L 636.835 154.057 C 636.835 153.573 637.484 153.243 637.484 152.76"></path>
          </defs>
          <text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre"}}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: wormDuration, delay: 2, ease: "linear", repeatType: "reverse", repeat: Infinity}} href="#path-0">=======================================</motion.textPath>
          </text>
        </svg>

        <svg transform="rotate(35)" className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -53.178 426.43 C -25.26 431.379 -5.624 429.816 12.97 432.915 C 42.395 432.915 63.356 431.662 86.9 426.43 C 110.88 420.309 122.595 407.981 134.241 394.005 C 146.433 375.718 154.088 361.055 159.533 344.718 C 165.833 323.319 166.786 303.969 168.612 285.704 C 168.612 260.732 177.274 245.606 184.825 227.987 C 201.204 205.963 216.072 195.738 236.057 189.076 C 277.045 185.042 309.487 189.276 342.412 197.507 C 382.16 209.036 413.302 218.502 444.228 227.338 C 481.443 238.156 508.397 238.363 537.613 238.363 C 565.016 234.598 583.273 219.292 598.573 203.992 C 616.491 185.426 623.149 167.743 635.538 155.354 L 636.835 154.057 C 636.835 153.573 637.484 153.243 637.484 152.76"></path>
          </defs>
          <text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre"}}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: wormDuration, delay: 0.5, ease: "linear", repeatType: "reverse", repeat: Infinity}} href="#path-0">===========================================================</motion.textPath>
          </text>
        </svg>

        <svg transform="rotate(90)" className="absolute top-0 left-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -104.838 58.3 C -78.337 31.853 -69.426 18.887 -57.995 11.457 C -14.851 -16.586 40.568 -1.153 86.049 7.944 C 141.606 36.331 158.127 61.663 142.261 103.972 C 120.586 147.322 106.665 177.239 102.444 215.225 C 102.444 266.989 141.396 280.374 172.709 296.03 C 221.362 304.601 263.081 292.243 302.699 284.319 C 370.938 279.706 415.859 300.213 463.138 326.479 C 517.406 370.819 566.485 402.598 617.721 431.876 L 648.169 445.929 C 678.074 458.113 708.514 468.868 739.514 477.548"></path>
          </defs>
          <motion.text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre", textShadow: whiteGlow }}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: wormDuration, delay: 3, ease: "linear", repeatType: "loop", repeat: Infinity}} href="#path-0">=============================================</motion.textPath>
          </motion.text>
        </svg>

      </div>

      <motion.div className="z-999 w-3/6 m-auto mt-50 text-white p-10 rounded-2xl border border-solid border-stone-100 bg-stone-700" 
      transition={{duration: 1, delay: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
        
        <div className="w-fit">
          <motion.h1 className={`${ubuntu.className} text-6xl font-bold`}>NOAH COX</motion.h1>
          <motion.div className="w-full h-1 bg-stone-100" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{duration: 0.5, ease: "linear"}}></motion.div>
        </div>

        <p></p>

        <div className="mt-5 w-100% flex row justify-start">

          <a href="https://www.github.com/NoahRGB" target="_blank">
            <Image src="/github-light.png" width={50} height={50} alt="github logo"/>
          </a>
          
          <a href="mailto:ncox2004@gmail.com" target="_blank">
            <Image className="ml-5" src="/mail-light.png" width={50} height={50} alt="email button"/>
          </a>

        </div>

      </motion.div>

    </div>
  );
}