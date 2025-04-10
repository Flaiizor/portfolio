import React from "react";
import PageTransition from "../../PageTransition";
import { AnimatedBackground } from 'animated-backgrounds';

import Banner from "./components/banner/Banner";
import AboutMe from "./components/about/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./Home.css";

export default function Home() {
    return (
        <PageTransition>
            <div className="home-container">

                <AnimatedBackground 
                    animationName="starryNight" 
                    blendMode="difference" 
                />

                <Banner/>

                <div id="about">
                    <AboutMe/>
                </div>

                <div id="projects">
                    <Projects/>
                </div>
                
                <Contact/>

            </div>
        </PageTransition>
    );
}

