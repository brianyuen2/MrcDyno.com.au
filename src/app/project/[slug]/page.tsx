import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { getProjectData } from "./projectData";
import { Gallery } from "./gallery";

// Generate dynamic metadata for each project page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `Brian | Project ${slug}`,
    icons: {
      icon: "/assets/icon.png",
    },
  };
}

type ProjectPageProps = {
  id: string;
  imgs: string[];
  desc: string;
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

const ProjectPageComponent = ({ id, desc, imgs }: ProjectPageProps) => {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      <div
        className={`grid grid-cols-3 items-center w-full 
      pt-8 3xl:pt-30
      pb-8`}
      >
        <div className="flex justify-end pr-6">
          <Link href="/#projects">
            <button
              className={`text-md md:text-2xl xl:text-2xl 
                      px-2 pt-1 pb-2
                      border border-[#F8F0E3] rounded-lg cursor-pointer
                       transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-lg hover:bg-white/15
                      `}
            >
              {"Back"}
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <h1
            className="text-xl md:text-3xl 3xl:text-6xl
          font-bold"
          >
            {`Project ${id}`}
          </h1>
        </div>
        <div></div>
      </div>
      <Gallery images={imgs} className={`mb-10`} />
      <div
        className={`flex flex-col items-center justify-center
         max-w-[600px] 3xl:max-w-[1000px]
         
        px-10`}
      >
        <p className="text-lg md:text-xl 3xl:text-3xl">{desc}</p>
      </div>
    </div>
  );
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  // Get project data from the mapping
  const projectData = getProjectData(slug);

  return <ProjectPageComponent {...projectData} />;
}
