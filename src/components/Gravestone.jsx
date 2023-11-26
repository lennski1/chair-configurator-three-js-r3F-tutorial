import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { useCustomization } from "../contexts/Customization";

function Gravestone(props) {
  const obj = useLoader(OBJLoader, "./models/Gravestone_Original.obj");
  // console.log(obj);
  const { material } = useCustomization();

  const whiteMarbleTextureProps = useTexture({
    map: "./textures/marble/marbleColor.jpg",
    // normalMap: "./textures/marble/marbleNormal.jpg",
    roughnessMap: "./textures/marble/marbleRoughness.jpg",
  });

  const blackMarbleTextureProps = useTexture({
    map: "./textures/blackMarble/Marble016_1K-PNG_Color.png",
    normalMap: "./textures/blackMarble/Marble016_1K-PNG_NormalDX.png",
    roughnessMap: "./textures/blackMarble/Marble016_1K-PNG_Roughness.png",
  });

  const textureProps =
    material === "black" ? blackMarbleTextureProps : whiteMarbleTextureProps;

  return (
    <group {...props} dispose={null}>
      {obj.children.map((child, index) => (
        <mesh key={index} geometry={child.geometry}>
          <meshStandardMaterial {...textureProps} />
        </mesh>
      ))}
    </group>
  );
}

export default Gravestone;
