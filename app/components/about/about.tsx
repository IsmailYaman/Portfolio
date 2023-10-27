import React from "react";
import { about } from "../../data/data";
import Image from "next/image";
import AboutSkills from "./aboutSkills";

const About = () => {
  return (
    <div className="py-36 bg-base-100">
      <div className="sm:container mx-auto">
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="row-span-2 relative hover:transform hover:scale-105 transition duration-100 ease-in-out">
            <Image
              src="/img/purple.png"
              alt="Ismail"
              className="rounded-2xl mx-auto shadow-2xl shadow-primary"
              width={500}
              height={500}
            />
            <div className="chat chat-start absolute w-80 right-0 top-5">
              <div className="chat-bubble w-full">
                <strong className="bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 text-transparent bg-clip-text font-black text-3xl">
                  {about.title}
                </strong>
              </div>
            </div>
          </div>
          <div className="flex items-center">
          <h2 className="col-start-2 font-medium">
            I'm a <AboutSkills /> {about.body1}
          </h2>
          </div>
          <p className="col-start-2 flex items-center text-justify">
            {about.body2} <br /> <br /> {about.body3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;