import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "red",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="text-4xl font-extrabold">
          {" "}
          Loading {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
}

export default Loader;
