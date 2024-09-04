import dynamic from "next/dynamic";
import React from "react";

const Scene = dynamic(() => import("@/components/Scene"));

export default function Home() {

    return (
        <main className="w-screen h-screen">
            <Scene/>
        </main>
    );
}
