'use client'
import Navbar from "./components/Navbar";
import {
    IconArrowAutofitRight,
    IconArrowAutofitUp,
  IconDiamonds,
  IconFlame,
  IconSparkles,
  IconStarFilled,
} from "@tabler/icons-react";
import { motion } from "motion/react";
export default function Home() {
  const text = 'bhat faheem'
  return (
    <div className="w-full min-h-screen bg-white relative text-black">
      <div className="w-full  relative h-screen">
  {/* Amber Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
      `,
      backgroundSize: "100% 100%",
    }}
  />
  <div className="absolute w-full">

    <Navbar />
  </div>
  <div className="absolute inset-0 z-10 flex flex-col">
    <p  className="mt-auto text-center">HELLO! MEET YOUR DEVELOPER FRIEND CRAFTING SAAS AND PRODUCTS</p>
  <motion.h1 className="w-full text-[15vw] font-extrabold mt-auto text-center leading-none">
{text.split("").map((char)=>(
  <motion.span initial={{}} transition={{type: "spring",
  stiffness: 400,
  damping: 25,}} whileHover={{scale:1.25,y:-10}} className="uppercase inline-block cursor-pointer">{char}</motion.span>
))}
  </motion.h1>
</div>


      </div>
      <div className="w-full  p-5 flex flex-col">
  <h1 className="text-8xl font-bold text-center">MY LATEST WORK</h1>
  <div className="border border-black">

  </div>
  <div className="grid grid-cols-2 gap-5 w-full h-full pt-5">
    <div className="border border-black  rounded-xl p-5 gap-5 flex flex-col">
      <h1 className="text-4xl font-bold">Siffinity Ai.</h1>
      <p className="text-balance">Siffinity ai is a saas of all image tools combined in one site! thus users will get a better experience </p>
    <motion.img initial={{}} transition={{type:'spring'}} whileHover={{scale:1.05,}} src="https://images.pexels.com/photos/34309247/pexels-photo-34309247.jpeg" className="object-cover h-1/2 rounded-xl" alt="" />
    <button className="border border-black flex rounded-2xl p-2">Visit Now <IconArrowAutofitRight/></button>
    </div>
    <div className="border border-black h-7/10 rounded-xl p-5">
      <h1 className="text-4xl font-bold">Siffinity Ai.</h1>
      <p className="text-balance">Siffinity ai is a saas of all image tools combined in one site! thus users will get a better experience </p>
    </div>
  </div>

</div>
   
      
    </div>
  );
}
