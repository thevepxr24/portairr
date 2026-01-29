import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Decal, useTexture, OrbitControls, Preload, Float, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

const LegoWithDecal = React.memo(({ iconUrl, name }) => {
  const decalTexture = useTexture(iconUrl);
  const { nodes } = useGLTF('/models/lego_head.glb');

  const meshRef = useRef();

  const head = nodes.HeadMesh || Object.values(nodes).find(n => n.isMesh);
  const [hovered, setHovered] = useState(false);

  return(
  <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={0.25} />
    <directionalLight position={[0, 0, 0.15]} />
    {head ? (
      <mesh
        geometry={head.geometry}
        material={head.material}
        scale={3.0}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Decal

          position={[0.0, 0.5, 0.25]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.75}
          map={decalTexture}
          flatShading
        />

        <Decal
          position={[0.0, 0.5, -0.25]}
          rotation={[0, Math.PI, 6.25]}
          scale={0.75}
          map={decalTexture}
          flatShading
          
        />
        

        {hovered && (
          <Html position={[0.0, 0.8, -5.0]} center>
            <div className="tooltip"><h2>{name}</h2></div>
          </Html>
        )}
      </mesh>

    ) : null};
  </Float>
  );

});

const Ball = React.memo(({ iconUrl }) => {
  const [decal] = useTexture([iconUrl]);

  /*Replace icosahedronGeometry with a /models/lego_head.fbx*/
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>

        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0.5, 0.5, 2]} rotation={[2 * Math.PI, 0, 6.25]} scale={2} map={decal} flatShading />
      </mesh>
    </Float>
  );
});

const BallCanvas = ({ icon,name }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <LegoWithDecal iconUrl={icon} name={name} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
