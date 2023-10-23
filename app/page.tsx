import React from "react";
import Banner from "./components/banner";
import Banner2 from "./components/banner2/banner2";
import About from "./components/about";
import RandomCatImage from "./components/randomCatImage";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";

const Home = () => {
    return (
        <>
          {/* <Banner/> */}
          <Banner2/>
          <About />
          <Projects />
          <Experience />
        </>
    );
};

export default Home;
