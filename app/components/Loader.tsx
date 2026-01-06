import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <div className="fixed inset-0 bg-red-500 text-white flex items-center justify-center">
        <p className="text-4xl font-extrabold">
          Loading {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
}

export default Loader;
