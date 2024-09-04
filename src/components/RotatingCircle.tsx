import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

const icons = [
    { id: 1, name: "Icon1" },
    { id: 2, name: "Icon2" },
    { id: 3, name: "Icon3" },
    // Добавь столько иконок, сколько нужно
];

//@ts-ignore
export default function RotatingCircle({ onSelectIcon }) {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState<number | null>(null);

    useFrame(() => {
        if (groupRef.current) {
            // groupRef.current.rotation.z += 0.01; // скорость вращения круга
        }
    });

    const handleIconClick = (iconId: number) => {
        onSelectIcon(iconId); // обновление состояния при клике на иконку
    };

    return (
        <group ref={groupRef}>
            {icons.map((icon, index) => (
                <mesh
                    key={icon.id}
                    position={[
                        Math.cos((index / icons.length) * 2 * Math.PI) * 5, // радиус круга
                        Math.sin((index / icons.length) * 2 * Math.PI) * 5,
                        0,
                    ]}
                    onPointerOver={() => setHovered(icon.id)}
                    onPointerOut={() => setHovered(null)}
                    onClick={() => handleIconClick(icon.id)}
                >
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={hovered === icon.id ? "hotpink" : "skyblue"} />
                    <Html distanceFactor={10}>
                        <div style={{ color: hovered === icon.id ? "hotpink" : "black" }}>
                            {icon.name}
                        </div>
                    </Html>
                </mesh>
            ))}
        </group>
    );
}
