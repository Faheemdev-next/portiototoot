import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Animation from "./Animation";
import Loader from "./Loader";

const Scrape = () => {
  return (
    <div className="w-full h-[70vh] md:h-screen">
      <Canvas style={{ touchAction: "pan-y" }}>
        <Suspense fallback={<Loader />}>
          <Animation />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scrape;
