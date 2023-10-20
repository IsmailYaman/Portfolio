// ProjectModal.tsx

import Image from "next/image";
import React from "react";

interface ProjectModalProps {
    project: {
        title: string;
        description: { body1: string; body2?: string }[];
        image: string;
        links: { label: string; url: string }[];
    };
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <dialog id="projectModal" className="modal bg-black bg-opacity-50 backdrop-blur-sm  ease-in-out" open>
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>
                        ✕
                    </button>
                </form>
                <Image src={project.image} quality={100} alt={project.title} width={500} height={500} />
                <h2>{project.title}</h2>
                {project.description.map((desc, index) => (
                    <p key={index}>
                        {desc.body1} <br /> <br /> {desc.body2}
                    </p>
                ))}
                {project.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        {link.label}
                    </a>
                ))}
            </div>
        </dialog>
    );
};

export default ProjectModal;
