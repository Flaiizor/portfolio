import React from "react";
import PageTransition from "../../PageTransition";
import { AnimatedBackground } from 'animated-backgrounds';
import FadeContent from '../../components/jsrepo/Animations/FadeContent/FadeContent.jsx'

import Banner from "./components/banner/Banner";
import AboutMe from "./components/about/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./Home.css";

export default function Home() {
    return (
        <PageTransition>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
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
                
                {/* <Contact/> */}
                
                    <Contact/>
                

            </div>
            </FadeContent>
        </PageTransition>
    );
}

