"use client";

import { motion } from "motion/react";
import { linearGradient } from "motion/react-client";
import "./globals.css";
import { edu } from "@/app/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
      <div className="blur w-screen h-screen absolute overflow-hidden top-0 left-0">
        
        <svg transform="rotate(25)" className="absolute -top-50 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -53.178 426.43 C -25.26 431.379 -5.624 429.816 12.97 432.915 C 42.395 432.915 63.356 431.662 86.9 426.43 C 110.88 420.309 122.595 407.981 134.241 394.005 C 146.433 375.718 154.088 361.055 159.533 344.718 C 165.833 323.319 166.786 303.969 168.612 285.704 C 168.612 260.732 177.274 245.606 184.825 227.987 C 201.204 205.963 216.072 195.738 236.057 189.076 C 277.045 185.042 309.487 189.276 342.412 197.507 C 382.16 209.036 413.302 218.502 444.228 227.338 C 481.443 238.156 508.397 238.363 537.613 238.363 C 565.016 234.598 583.273 219.292 598.573 203.992 C 616.491 185.426 623.149 167.743 635.538 155.354 L 636.835 154.057 C 636.835 153.573 637.484 153.243 637.484 152.76"></path>
          </defs>
          <text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre"}}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: 5, ease: "linear", repeatType: "loop", repeat: Infinity}} href="#path-0">=============================================================================================</motion.textPath>
          </text>
        </svg>

        <svg transform="rotate(350)" className="absolute top-50 left-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -53.178 426.43 C -25.26 431.379 -5.624 429.816 12.97 432.915 C 42.395 432.915 63.356 431.662 86.9 426.43 C 110.88 420.309 122.595 407.981 134.241 394.005 C 146.433 375.718 154.088 361.055 159.533 344.718 C 165.833 323.319 166.786 303.969 168.612 285.704 C 168.612 260.732 177.274 245.606 184.825 227.987 C 201.204 205.963 216.072 195.738 236.057 189.076 C 277.045 185.042 309.487 189.276 342.412 197.507 C 382.16 209.036 413.302 218.502 444.228 227.338 C 481.443 238.156 508.397 238.363 537.613 238.363 C 565.016 234.598 583.273 219.292 598.573 203.992 C 616.491 185.426 623.149 167.743 635.538 155.354 L 636.835 154.057 C 636.835 153.573 637.484 153.243 637.484 152.76"></path>
          </defs>
          <text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre"}}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: 5, delay: 1, ease: "linear", repeatType: "loop", repeat: Infinity}} href="#path-0">=============================================================================================</motion.textPath>
          </text>
        </svg>

        <svg transform="rotate(180)" className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -53.178 426.43 C -25.26 431.379 -5.624 429.816 12.97 432.915 C 42.395 432.915 63.356 431.662 86.9 426.43 C 110.88 420.309 122.595 407.981 134.241 394.005 C 146.433 375.718 154.088 361.055 159.533 344.718 C 165.833 323.319 166.786 303.969 168.612 285.704 C 168.612 260.732 177.274 245.606 184.825 227.987 C 201.204 205.963 216.072 195.738 236.057 189.076 C 277.045 185.042 309.487 189.276 342.412 197.507 C 382.16 209.036 413.302 218.502 444.228 227.338 C 481.443 238.156 508.397 238.363 537.613 238.363 C 565.016 234.598 583.273 219.292 598.573 203.992 C 616.491 185.426 623.149 167.743 635.538 155.354 L 636.835 154.057 C 636.835 153.573 637.484 153.243 637.484 152.76"></path>
          </defs>
          <text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre"}}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: 5, delay: 2, ease: "linear", repeatType: "loop", repeat: Infinity}} href="#path-0">=============================================================================================</motion.textPath>
          </text>
        </svg>

        <svg transform="rotate(35)" className="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -53.178 426.43 C -25.26 431.379 -5.624 429.816 12.97 432.915 C 42.395 432.915 63.356 431.662 86.9 426.43 C 110.88 420.309 122.595 407.981 134.241 394.005 C 146.433 375.718 154.088 361.055 159.533 344.718 C 165.833 323.319 166.786 303.969 168.612 285.704 C 168.612 260.732 177.274 245.606 184.825 227.987 C 201.204 205.963 216.072 195.738 236.057 189.076 C 277.045 185.042 309.487 189.276 342.412 197.507 C 382.16 209.036 413.302 218.502 444.228 227.338 C 481.443 238.156 508.397 238.363 537.613 238.363 C 565.016 234.598 583.273 219.292 598.573 203.992 C 616.491 185.426 623.149 167.743 635.538 155.354 L 636.835 154.057 C 636.835 153.573 637.484 153.243 637.484 152.76"></path>
          </defs>
          <text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre"}}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: 5, delay: 0.5, ease: "linear", repeatType: "loop", repeat: Infinity}} href="#path-0">=============================================================================================</motion.textPath>
          </text>
        </svg>

        <svg transform="rotate(90)" className="absolute top-0 left-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <path id="path-0" style={{fill: "none"}} d="M -104.838 58.3 C -78.337 31.853 -69.426 18.887 -57.995 11.457 C -14.851 -16.586 40.568 -1.153 86.049 7.944 C 141.606 36.331 158.127 61.663 142.261 103.972 C 120.586 147.322 106.665 177.239 102.444 215.225 C 102.444 266.989 141.396 280.374 172.709 296.03 C 221.362 304.601 263.081 292.243 302.699 284.319 C 370.938 279.706 415.859 300.213 463.138 326.479 C 517.406 370.819 566.485 402.598 617.721 431.876 L 648.169 445.929 C 678.074 458.113 708.514 468.868 739.514 477.548"></path>
          </defs>
          <text style={{fill: "rgb(255, 255, 255)", fontFamily: "Arial, sans-serif", fontSize: "28px", whiteSpace: "pre"}}>
            <motion.textPath initial={{ startOffset: "-200%"}} animate={{ startOffset: "100%"}} transition={{duration: 5, delay: 3, ease: "linear", repeatType: "loop", repeat: Infinity}} href="#path-0">=================================================================================================</motion.textPath>
          </text>
        </svg>

      </div>

      <motion.div className="w-2/6 ml-50 mt-50 text-white" 
      transition={{duration: 1, delay: 2}} initial={{opacity: 0}} animate={{opacity: 1}}>
      
        <h1 className={`${edu.className} text-6xl`} >Noah Cox</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur iste fuga tempore cum assumenda velit amet, dolorum odit beatae id!</p>

        <div className="mt-5 w-100% flex row justify-start">

          <a href="https://www.github.com/NoahRGB" target="_blank">
            <Image src="/github.png" width={50} height={50} alt="github logo"/>
          </a>
          
          <a href="mailto:ncox2004@gmail.com" target="_blank">
            <Image className="ml-5" src="/mail.png" width={50} height={50} alt="email button"/>
          </a>

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <motion.ellipse style={{fillOpacity: 0, stroke: "rgb(62, 62, 62)", strokeOpacity: 1, strokeWidth: 5}} 
            cx="235.219" cy="244.859" rx="138.817" ry="138.817"
            initial={{ pathLength: 0}} animate={{ pathLength: 1}} transition={{duration: 2, ease: "linear", repeatType: "loop", repeat: Infinity}} ></motion.ellipse>
          </svg> */}


        </div>

      </motion.div>

    </div>
  );
}





  {/* <div className="absolute left-50 w-200 top-50 h-150 bg-green-500 overflow-hidden">

    <div>
      <svg className="absolute left-0 top-0" id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
      <motion.path d="M0 471L22.8 461.8C45.7 452.7 91.3 434.3 137 424.7C182.7 415 228.3 414 274 418.2C319.7 422.3 365.3 431.7 411.2 428.7C457 425.7 503 410.3 548.8 399C594.7 387.7 640.3 380.3 686 389C731.7 397.7 777.3 422.3 823 428.5C868.7 434.7 914.3 422.3 937.2 416.2L960 410L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z" 
      fill="#0066FF" strokeLinecap="round" strokeLinejoin="miter" x="480"
      initial={{ x: 0 }} animate={{ x: 960 }} transition={{duration: 4, ease: "linear", repeat: Infinity, repeatType: "loop"}} /></svg>
    </div>

    <div>
      <svg className="absolute left-0 top-0" id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
      <motion.path d="M0 471L22.8 461.8C45.7 452.7 91.3 434.3 137 424.7C182.7 415 228.3 414 274 418.2C319.7 422.3 365.3 431.7 411.2 428.7C457 425.7 503 410.3 548.8 399C594.7 387.7 640.3 380.3 686 389C731.7 397.7 777.3 422.3 823 428.5C868.7 434.7 914.3 422.3 937.2 416.2L960 410L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z" 
      fill="#eb4034" strokeLinecap="round" strokeLinejoin="miter" x="480"
      initial={{ x: 0 }} animate={{ x: 960 }} transition={{delay: 4, duration: 4, ease: "linear", repeat: Infinity, repeatType: "loop"}} /></svg>
    </div>

  </div> */}