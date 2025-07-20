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
      3xl:pt-30`}
      >
        <div className="flex justify-end pl-8">
          <Link href="/#projects">
            <button
              className={`text-lg md:text-xl xl:text-2xl 
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
            className="3xl:text-6xl
          font-bold mb-4"
          >
            {`Project ${id}`}
          </h1>
        </div>
        <div></div>
      </div>
      <Gallery images={imgs} />
      <p
        className="text-lg mb-6
      3xl:pt-15"
      >
        {desc}
      </p>
    </div>
  );
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  // Get project data from the mapping
  const projectData = getProjectData(slug);

  // If project not found, show 404 or fallback
  if (!projectData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/#projects">
          <button className="px-4 py-2 border border-[#F8F0E3] rounded-lg">
            Back to Projects
          </button>
        </Link>
      </div>
    );
  }

  return <ProjectPageComponent {...projectData} />;
}
