import { Canvas } from "@react-three/fiber";
import React from "react";
import Animation from "./Animation";

const Scrape = () => {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <Animation />
      </Canvas>
    </div>
  );
};

export default Scrape;
