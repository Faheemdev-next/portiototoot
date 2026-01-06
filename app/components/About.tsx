import { useGSAP } from "@gsap/react";
import { Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";
import { motion } from "motion/react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandInstagramFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";
const About = () => {
  const text = "CONNECT WITH ME";

  useGSAP(() => {
    const time = gsap.timeline();
  });
  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-center">
      <motion.h1 className="w-full text-[15vw] font-extrabold text-center leading-none">
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
      </motion.h1>{" "}
      <div className="flex gap-2 pt-5">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, animationDelay: 2 }}
        >
          <IconBrandInstagramFilled size={50} />
        </motion.span>
        <IconBrandLinkedin size={50} />
        <IconBrandGithub size={50} />
      </div>
    </div>
  );
};

export default About;
