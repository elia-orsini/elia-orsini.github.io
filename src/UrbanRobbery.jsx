import {
  Environment,
  MeshReflectorMaterial,
  PerspectiveCamera,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Model } from "./components/Motorcyclist";
import { Suspense, useState } from "react";

const Motorcyclist = () => {
  return (
    <group dispose={null}>
      <Model scale={[2.8, 2.8, 2.8]} position={[0, -2.5, 0]} castShadow />
    </group>
  );
};

const Camera = () => {
  // const scroll = useScroll();
  // const [range, setRange] = useState(0);

  // useFrame(() => {
  //   console.log(scroll.range(0,1/3));
  // });

  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 1, 8]}
      rotation={[-0.1, 0, 0]}
    />
  );
};

const UrbanRobbery = () => {
  return (
    <div className="h-96 sm:h-screen flex flex-col">
      {/* <p className="text-2xl font-bold text-center">city_robbery</p>
      <p className="text-lg text-left">
        trying to merge the real world with a 3D virtual environment, city
        robbery uses 3D rendering techniques with some photogrammetry techniques
        to steal objects from the city of edinburgh. feeling the need to depart
        from the superficial, clean and perfect world of 3D rendering alone,
        introducing these chaotic, imperfect elements from the real world adds
        some freshness to the images i enjoy making. there is also the
        connection to the real world i am very fond of the archiving of places
        that might not leave forever in the real world, but they will always
        live digitally. its a project that merges the practicing of archiving
        and collection fragments of the real world with the enjoyment of
        rendering and experimenting with 3D rendering techniques. i feel the
        need to merge the practice of photography, something i do not enjoy
        anymore because of the boundaries and limits it introduces with the
        practice of 3D rendering, something totally digital that has no real
        links with the real world.
      </p> */}
      <div className="flex flex-col my-auto">
        <div className="mx-auto my-auto">
          <svg
            width="50"
            height="50"
            viewBox="0 0 58 58"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
                {/* <!-- Thicken out the original shape --> */}
                <feMorphology
                  operator="dilate"
                  radius="0.6"
                  in="SourceAlpha"
                  result="thicken"
                />

                {/* <!-- Use a gaussian blur to create the soft blurriness of the glow --> */}
                <feGaussianBlur
                  in="thicken"
                  stdDeviation="1.8"
                  result="blurred"
                />

                {/* <!-- Change the colour --> */}
                <feFlood flood-color="#b4ff00" result="glowColor" />

                {/* <!-- Color in the glows --> */}
                <feComposite
                  in="glowColor"
                  in2="blurred"
                  operator="in"
                  result="softGlow_colored"
                />

                {/* <!--	Layer the effects together --> */}
                <feMerge>
                  <feMergeNode in="softGlow_colored" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(2 1)" stroke="#b4ff00" stroke-width="1.5">
                <circle
                  cx="42.601"
                  cy="11.462"
                  r="5"
                  fill-opacity="1"
                  fill="#b4ff00"
                  filter="url(#sofGlow)"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="1;0;0;0;0;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                    filter="url(#sofGlow)"
                  />
                </circle>
                <circle
                  cx="49.063"
                  cy="27.063"
                  r="5"
                  fill-opacity="0"
                  fill="#b4ff00"
                  filter="url(#sofGlow)"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;1;0;0;0;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                    filter="url(#sofGlow)"
                  />
                </circle>
                <circle
                  cx="42.601"
                  cy="42.663"
                  r="5"
                  fill-opacity="0"
                  fill="#b4ff00"
                  filter="url(#sofGlow)"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;1;0;0;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                    filter="url(#sofGlow)"
                  />
                </circle>
                <circle
                  cx="27"
                  cy="49.125"
                  r="5"
                  fill-opacity="0"
                  fill="#b4ff00"
                  filter="url(#sofGlow)"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;1;0;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                    filter="url(#sofGlow)"
                  />
                </circle>
                <circle
                  cx="11.399"
                  cy="42.663"
                  r="5"
                  fill-opacity="0"
                  fill="#b4ff00"
                  filter="url(#sofGlow)"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;0;1;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                    filter="url(#sofGlow)"
                  />
                </circle>
                <circle
                  cx="4.938"
                  cy="27.063"
                  r="5"
                  fill-opacity="0"
                  fill="#b4ff00"
                  filter="url(#sofGlow)"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;0;0;1;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                    filter="url(#sofGlow)"
                  />
                </circle>
                <circle
                  cx="11.399"
                  cy="11.462"
                  r="5"
                  fill-opacity="0"
                  fill="#b4ff00"
                  filter="url(#sofGlow)"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;0;0;0;1;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                    filter="url(#sofGlow)"
                  />
                </circle>
                <circle
                  cx="27"
                  cy="5"
                  r="5"
                  fill-opacity="0"
                  fill="#b4ff00"
                  filter="url(#sofGlow)"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;0;0;0;0;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                    filter="url(#sofGlow)"
                  />
                </circle>
              </g>
            </g>
          </svg>
        </div>
        <img className="mx-auto my-auto w-40" src="/loading.png" />
      </div>
    </div>
  );
};

export default UrbanRobbery;
