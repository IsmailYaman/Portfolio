import React from 'react';
import { experiences } from '../../data/data';
import ExperienceSection from './experienceSection';

const Experiences: React.FC = () => {
    return (
        <div className="pb-36 bg-base-100">
            <div className="sm:container sm:mx-auto mx-4">
            <h1><span className="relative z-10 bg-gradient-to-br from-pink-700 via-purple-700 to-blue-400 text-transparent h-full bg-clip-text text-5xl leading-loose font-black">Tools</span> I'm using</h1>

                {Object.entries(experiences).map(([key, value]) => (
                    <ExperienceSection key={key} title={key.charAt(0).toUpperCase() + key.slice(1)} data={value} />
                ))}
            </div>
        </div>
    );
};

export default Experiences;
