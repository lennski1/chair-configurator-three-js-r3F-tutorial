import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  Sky,
  Environment,
  useTexture,
} from "@react-three/drei";

import Gravestone from "./Gravestone";

const Experience = () => {
  // const grassTexture = useTexture({
  //   map: "",
  //   normalMap: "",
  //   roughnessMap: "",
  // });

  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="park" intensity={0.3}>
          <Environment preset="park" background blur={0.7} />
          <Gravestone />
        </Stage>
        {/* <Sky sunPosition={[100, 20, 100]} /> */}
        {/* <pointLight castShadow intensity={0.8} position={[100, 100, 100]} /> */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
          <planeGeometry args={[170, 170]} />
          <meshStandardMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#fdfbd3"
          />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default Experience;
