import {useAnimations, useGLTF, useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {Group} from "three";
import {useFrame} from "@react-three/fiber";

useGLTF.preload('/robot_playground.glb')

export function Model() {
    const group = useRef<Group | null>(null)
    const {nodes, materials, animations, scene} = useGLTF('/robot_playground.glb')
    const scroll = useScroll()
    const {actions, clips} = useAnimations(animations, scene)
    useEffect(() => {
        if (actions && actions["Experiment"]) {
            const action = actions["Experiment"];
            action.play();
            action.paused = true;
        }
    }, [actions]);

    useFrame(() => {
        if (actions && actions["Experiment"]) {
            const action = actions["Experiment"];
            action.time = (action.getClip().duration * scroll.offset) / 3;
        }
    });

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    );
}
