"use client";
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
import Projects from "./components/Projects";
import Animation from "./components/Animation";
import { Canvas } from "@react-three/fiber";
import Scrape from "./components/Scrape";
import About from "./components/About";
export default function Home() {
  const text = "bhat faheem";
  return (
    <div className="w-full min-h-screen bg-black relative text-white">
      <div className="w-full  relative h-screen">
        {/* Amber Glow Background */}
        <div className="absolute inset-0 z-20">
          <Scrape />
        </div>

        <div className="absolute w-full">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col">
          <p className="mt-auto text-center">
            HELLO! MEET YOUR DEVELOPER FRIEND CRAFTING SAAS AND PRODUCTS
          </p>
          <motion.h1 className="w-full text-[15vw] font-extrabold mt-auto text-center leading-none">
            {text.split("").map((char) => (
              <motion.span
              key={char}
                initial={{}}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                whileHover={{ scale: 1.25, y: -10 }}
                className="uppercase inline-block cursor-pointer"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>
      <div className="p-5">
        <Projects />
        <About />
      </div>
    </div>
  );
}
