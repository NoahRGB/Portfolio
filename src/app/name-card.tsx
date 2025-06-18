
import { motion } from "motion/react";
import { ubuntu } from "@/app/fonts";
import Image from "next/image";

export default function NameCard() {
    return (
        <motion.div className="w-3/6 m-auto mt-50 text-white p-10 rounded-2xl border border-solid border-stone-100 bg-stone-700" 
        transition={{duration: 1, delay: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
        
            <div className="m-auto w-fit">
            <motion.h1 className={`${ubuntu.className} text-4xl font-bold`}>NOAH COX</motion.h1>
            <motion.div className="w-full h- bg-stone-100" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{duration: 1, ease: "linear"}}></motion.div>    
            </div>

            <p className="mt-2 text-center">yadda yadda yadda yadda yadda yadda yadda</p>

            <div className="mt-5 w-100% flex row justify-center">

                <a href="https://www.github.com/NoahRGB" target="_blank">
                    <Image src="/github-light.png" width={40} height={40} alt="github logo"/>
                </a>
                
                <a href="mailto:ncox2004@gmail.com" target="_blank">
                    <Image className="ml-5" src="/mail-light.png" width={40} height={40} alt="email button"/>
                </a>

                <a href="https://www.google.com" target="_blank">
                    <Image className="ml-5" src="/linkedin-light.png" width={40} height={40} alt="linkedin logo"/>
                </a>

            </div>

            <motion.div className="relative pb-1 ml-50" initial={{ top: "5px" }} animate={{ top: "20px" }} transition={{ duration: 1, delay: 0, ease: "linear", repeatType: "reverse", repeat: Infinity }}>
            <Image className="" src="/down-arrow.png" width={40} height={40} alt="down arrow"/>
            </motion.div>

        </motion.div>
    );
}