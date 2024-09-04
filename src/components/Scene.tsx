"use client"

import {Canvas, useThree} from "@react-three/fiber";

import React, {Suspense} from 'react';
import {Model} from "@/components/Model";
import {useProgress, Html, ScrollControls} from "@react-three/drei";


function Loader() {
    const {progress, active} = useProgress()
    return <Html center>
        {progress.toFixed(1)}% loaded
    </Html>
}

export default function Scene() {


    return (
        <Canvas>
            <directionalLight position={[-5, -55, 5]} intensity={4}/>
            <Suspense fallback={<Loader/>}>
                <ScrollControls damping={0.5} pages={3}>
                <Model/>
                </ScrollControls>
            </Suspense>
        </Canvas>
    );
};
