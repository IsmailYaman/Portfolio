import Image from "next/image";
import React from "react";

interface Project {
    id: number;
    title: string;
    image: string;
    tools: { label: string; image: string }[];
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="card w-full h-full bg-base-100 mx-auto shadow-2xl hover:shadow-primary ease-in-out duration-300">
            <figure>
                <Image src={project.image} quality={100} alt={project.title} width={500} height={500} />
            </figure>
            <div className="card-body bg-gradient-to-br from-[#180042] via-[#2e017d] to-primary rounded-b-2xl">
                <h2 className="card-title text-white">{project.title}</h2>
                <div className="card-actions">
                    {project.tools.map((tool) => (
                        <div className="badge badge-primary badge-sm text-white">{tool.label}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
