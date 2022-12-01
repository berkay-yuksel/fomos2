import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
const WaveShaderMaterial = shaderMaterial(
    // Uniform
    {
      uTime: 0,
      uColor: new THREE.Color(0.0, 0.0, 0.0),
      uTexture: new THREE.Texture()
    },
    // Vertex Shader
    glsl`
      precision mediump float;
   
      varying vec2 vUv;
      varying float vWave;
  
      uniform float uTime;
  
      #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);
  
      void main() {
        vUv = uv;
  
        vec3 pos = position;
        float noiseFreq = 4.0;
        float noiseAmp = 0.4;
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;
        vWave = pos.z;
  
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
      }
    `,
    // Fragment Shader
    glsl`
      precision mediump float;
  
      uniform vec3 uColor;
      uniform float uTime;
      uniform sampler2D uTexture;
  
      varying vec2 vUv;
      varying float vWave;
  
      void main() {
        float wave = vWave * 0.2;
        vec3 texture = texture2D(uTexture, vUv + wave).rgb;
        gl_FragColor = vec4(texture, 1.0); 
      }
    `
  );
  
  extend({ WaveShaderMaterial });
  
  const Wave = () => {
    const ref = useRef();
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  
    const [image] = useLoader(THREE.TextureLoader, [
      "https://storage.cloudconvert.com/tasks/c758c92b-28f6-4885-ba75-4de909bb30e2/plt.webp?AWSAccessKeyId=cloudconvert-production&Expires=1669903805&Signature=37wuWKT9vxGrKodRy%2ByO41lxqNI%3D&response-content-disposition=inline%3B%20filename%3D%22plt.webp%22&response-content-type=image%2Fwebp"
    ]);
  
    return (
      <mesh>
        <planeBufferGeometry args={[1, 1, 20, 20]} />
        <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image}  />
      </mesh>
    );
  };
  
  const Scene = () => {
    return (
      <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Wave />
        </Suspense>
      </Canvas>
    );
  };

const Pluto = () => {
  return (
     <Scene />
  )
}

export default Pluto