"use client";
import React, { useState } from "react";
import ProjectCard from "./projectCard";
import ProjectModal from "./projectModal"; // Import the ProjectModal component
import { projects } from "../../data/data";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const openModal = (projectId: number) => {
        setSelectedProject(projectId);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="py-5 text-base-100 bg-white">
            <div className="sm:container mx-auto">
                <h1 className="text-center">Projects</h1>
                <div className="flex flex-wrap mx-4">
                    {projects.map((project) => (
                        <div key={project.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
                            <div onClick={() => openModal(project.id)} className="cursor-pointer">
                                <ProjectCard project={project} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject !== null && <ProjectModal project={projects[selectedProject - 1]} onClose={closeModal} />}
        </div>
    );
};

export default Projects;
