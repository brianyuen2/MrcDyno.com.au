import Image, { ImageProps } from "next/image";

type ProjectPageProps = {
  id: string;
  imgs: ImageProps[];
  desc: string;
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

const ProjectPageComponent = ({ id, desc, imgs }: ProjectPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-white text-4xl font-bold mb-4">{id.toUpperCase()}</h1>
      <p className="text-white text-lg mb-6">{desc}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {imgs.map((img, index) => (
          <Image key={index} {...img} className="rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  // Here you would typically fetch project data based on slug
  // For now, using placeholder data
  const projectData: ProjectPageProps = {
    id: slug,
    desc: `Description for project ${slug}`,
    imgs: [], // Add your images here
  };

  return <ProjectPageComponent {...projectData} />;
}
