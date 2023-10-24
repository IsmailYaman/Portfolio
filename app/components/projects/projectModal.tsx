import Image from "next/image";
import React from "react";

interface ProjectModalProps {
    project: {
        title: string;
        description: { body1: string; body2?: string }[];
        image: string;
        links: { label: string; url: string }[];
        tools: { label: string; image: string }[];
    };
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <dialog id="projectModal" className="modal bg-black bg-opacity-50 backdrop-blur-sm ease-in-out" open>
            <div className="modal-box flex flex-col lg:flex-row max-w-6xl p-10">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10" onClick={onClose}>
                        ✕
                    </button>
                </form>

                <div className="lg:w-3/5 relative">
                    <div className="w-full h-96">
                        <Image
                            src={project.image}
                            quality={100}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="object-center rounded-xl"
                        />
                    </div>
                </div>

                <div className="lg:ml-5 lg:w-2/5 justify-between">
                    <h2>{project.title}</h2>
                    {project.description.map((desc, index) => (
                        <div key={index} className="mb-5">
                            <p className="mb-4">{desc.body1}</p>
                            {desc.body2 && <p className="mb-4">{desc.body2}</p>}
                        </div>
                    ))}

                    <div className="flex w-full justify-between">
                        <div className="flex flex-col">
                            <strong className="mb-1">Tools used:</strong>
                            <div className="flex flex-wrap">
                                {project.tools.map((tool, index) => (
                                    <div key={index} className="badge badge-primary badge-sm mr-1 mb-1 text-white">
                                        {tool.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col align-bottom self-end">
                            {project.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default ProjectModal;
