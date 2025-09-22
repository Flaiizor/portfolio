import React from "react";
import "./AboutMe.css";

import JavaIcon from "../../images/tech-stack/Java.png";
import CsharpIcon from "../../images/tech-stack/C_sharp.png";
import PythonIcon from "../../images/tech-stack/Python.png";
import CppIcon from "../../images/tech-stack/cpp.png";
import AwsIcon from "../../images/tech-stack/aws.png";
import CssIcon from "../../images/tech-stack/CSS.png";
import DjangoIcon from "../../images/tech-stack/Django.png";
import GitIcon from "../../images/tech-stack/Git.png";
import HtmlIcon from "../../images/tech-stack/HTML.png";
import JavaScriptIcon from "../../images/tech-stack/JavaScript.webp";
import RIcon from "../../images/tech-stack/R.png";
import ReactIcon from "../../images/tech-stack/React.png";
import SQLiteIcon from "../../images/tech-stack/sqlite.png";
import TypeScriptIcon from "../../images/tech-stack/TypeScript.png";
import DotNetIcon from "../../images/tech-stack/dotnet.png";


export default function About() {
    return (
        <div className="about-container">
            <div>
                <h1>About Me</h1>
                <p>
                    I am a software engineer with a masters degree in human-computer interaction. 
                    I have a great <b>passion for learning</b> and I always strive towards bettering myself in my field.
                    I love to tinker and learn new technologies, both in a professional setting and at home.
                    <br/><br/>
                    I specialize in <b>Python</b>, <b>Java</b>, and <b>C#</b>, and have experience with many other technologies.
                </p>
            </div>
            <div>
                <h1>Tech Stack</h1>
                <div className="tech-stack">
                    <a>
                        <img src={JavaIcon} alt="JavaIcon" className="tech-stack-icon"/>
                        <p>Java</p>
                    </a>
                    <a>
                        <img src={PythonIcon} alt="PythonIcon" className="tech-stack-icon"/>
                        <p>Python</p>
                    </a>
                    <a>
                        <img src={DjangoIcon} alt="DjangoIcon" className="tech-stack-icon"/>
                        <p>Django</p>
                    </a>
                    <a>
                        <img src={CsharpIcon} alt="CsharpIcon" className="tech-stack-icon"/>
                        <p>C#</p>
                    </a>
                    <a>
                        <img src={DotNetIcon} alt="DotNetIcon" className="tech-stack-icon"/>
                        <p>.NET Core</p>
                    </a>
                    <a>
                        <img src={CppIcon} alt="CppIcon" className="tech-stack-icon"/>
                        <p>C++</p>
                    </a>
                    <a>
                        <img src={GitIcon} alt="GitIcon" className="tech-stack-icon"/>
                        <p>Git</p>
                    </a>
                    <a>
                        <img src={SQLiteIcon} alt="SQLiteIcon" className="tech-stack-icon"/>
                        <p>SQLite</p>
                    </a>
                    <a>
                        <img src={AwsIcon} alt="AwsIcon" className="tech-stack-icon"/>
                        <p>AWS</p>
                    </a>
                    <a>
                        <img src={JavaScriptIcon} alt="JavaScriptIcon" className="tech-stack-icon"/>
                        <p>javaScript</p>
                    </a>
                    <a>
                        <img src={TypeScriptIcon} alt="TypeScriptIcon" className="tech-stack-icon"/>
                        <p>TypeScript</p>
                    </a>
                    <a>
                        <img src={ReactIcon} alt="ReactIcon" className="tech-stack-icon"/>
                        <p>React</p>
                    </a>
                    <a>
                        <img src={CssIcon} alt="CssIcon" className="tech-stack-icon"/>
                        <p>CSS</p>
                    </a>
                    <a>
                        <img src={HtmlIcon} alt="HtmlIcon" className="tech-stack-icon"/>
                        <p>HTML</p>
                    </a>
                    <a>
                        <img src={RIcon} alt="RIcon" className="tech-stack-icon"/>
                        <p>R</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
