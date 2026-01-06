"use client";

import { motion } from "motion/react";

const ProjectCard = ({ title, description, tags, reverse }:{title:string,description:string,tags:string[],reverse?:boolean}) => {
  return (
    <motion.div
      className={`w-full h-full flex flex-col md:flex-row gap-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Image / Preview */}
      <img
        loading="lazy"
        src="https://images.pexels.com/photos/29148854/pexels-photo-29148854.jpeg"
        className="w-full md:w-4/6 h-[300px] md:h-full rounded-2xl object-cover flex items-center justify-center text-zinc-400 text-xl"
      />

      {/* Content */}
      <div className="w-full md:w-2/6 h-full rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-zinc-400 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button className="mt-6 w-fit px-5 py-2 rounded-full border border-zinc-700 hover:bg-zinc-900 transition">
          View Project →
        </button>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="w-full min-h-screen p-5 md:p-10">
      {/* Heading */}
      <motion.h1
        className="text-6xl md:text-9xl font-extrabold text-red-700 mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        PROJECTS
      </motion.h1>

      {/* Project 1 */}
      <div className="h-screen mb-32">
        <ProjectCard
          title="Creative Portfolio"
          description="A modern portfolio website focused on motion, typography, and smooth interactions."
          tags={["Next.js", "Framer Motion", "Tailwind"]}
        />
      </div>

      {/* Project 2 */}
      <div className="h-screen">
        <ProjectCard
          title="Interactive Dashboard"
          description="A data-driven dashboard with clean UI, charts, and responsive layouts."
          tags={["React", "Charts", "UI Design"]}
          reverse
        />
      </div>
    </div>
  );
}
