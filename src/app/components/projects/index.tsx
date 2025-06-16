import React from "react";
import Image from "next/image";

export const Projects = () => {
    return (
        <div>
            <Card filename={'/assets/projects/project-1.png'}/>
        </div>
    )
}

const Card = (filename: string) => {
    return (
        <div>
            <Image src={filename} alt={filename} />
        </div>
    )
}