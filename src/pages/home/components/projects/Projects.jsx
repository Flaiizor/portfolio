import React from "react";
import "./Projects.css";
import githubIcon from "../../images/githubIcon.png";
import pdfIcon from "../../images/pdfIcon.png";


const projects = [
    {
        type: "Master's Thesis",
        title: "AR for Enhanced Video Viewing During Cardio Exercise",
        description: 
        (
            <>
                <h3>Description:</h3>
                <i>Indoor machine cardio is often accompanied by watching a TV show or something similar on your phone. However, the viewing experience on a phone screen is poor at best.</i>
                <br/>
                In this project, we investigated the potential increase in viewing experience during cardio exercise by utilizing Augmented Reality technology.
                We tested a <b>Static</b> and an <b>Adaptive</b> AR screen against the traditional phone screen and found that augmented reality approaches provide a significantly better viewing experience compared to the current phone approach.
                This project lays the groundwork for future AR video research by providing guidelines on screen size, placement, and adaptability.
            </>
        ),
        experience: 
        (
            <>
                <h3>Experience gained:</h3>
                In this project, I lead a research group in researching, developing, and evaluating an Augmented Reality system for optimized video placement during cardio exercise.
                I was also in charge of spearheading the evaluation approach and analysis of results.
                Stepping into a leader role gave me valuable experience in <b>project organization</b>, <b>delegation of work</b>, and <b>time management</b>. 
                The evaluation and data analysis gave me experience in <b>conducting a structured study</b>, analyse ordinal data in <b>R</b>, and perform <b>thematic analysis</b> of interview data.
            </>     
        ),
        
        technologies: ["C#", "Python", "R", "Unity"],
        github:"https://github.com/Kristoffermg/AR-for-Enhanced-Video-Viewing-During-Cardio-Exercise",
        paper: "/master_thesis.pdf"
    },
    {
        type: "Bachelor's Project",
        title: "Exploring DETR for Recognition and Detection of Traffic Signs",
        description: 
        (
            <>
                <h3>Description:</h3>
                In this project, we explore the viability of the <b>DETR</b> algorithm to perform <b>real-time traffic sign detection</b>.
                Our findings indicate that, while DETR is able to perform real-time detection, it is not comparable to other state-of-the-art models like YOLO and R-CNN.
            </>
        ),
        experience: 
        (
            <>
                <h3>Experience gained:</h3>
                This project was my introduction to <b>machine-vision</b> algorithms for <b>object detection</b>. I gained valuable insight into training algorithms with large datasets and evaluating their performance.
            </>
        ),
        technologies: ["Python", "PyTorch"],
        github:"https://github.com/Traffic-sign-detection-P6AAU",
        paper: "/Bachelor_project.pdf"
    },
    {
        type: "Personal Project",
        title: "A full-stack web application for personal media overview",
        description: 
        (
            <>
                <h3>Description:</h3>
                I wanted a way to keep track of all the media I consume. 
                With this project I can, at a glance, scan my backlog of media to pick what I want to experience next.
                Creating a project that both provides actual value and furthers my skills as a developer is always a joy.
            </>
        ),
        experience: 
        (
            <>
                <h3>Experience gained:</h3>
                This project let me dive into learning more about <b>Java</b> programming. It was interesting to work with the <b>Spring Boot</b> framework and get a feel for the development process accompanying it.
                I was also able to further develop my skills of <b>React</b> and <b>TypeScript</b> and tie front- and backend together using <b>Electron</b>.
            </>
        ),
        technologies: ["Java", "Spring Boot", "React", "TypeScript", "Electron", "Docker"],
        github:"https://github.com/Flaiizor/mediahub",
    },
    {
        type: "Personal Project",
        title: "Home Helper: Easy overview and insights into your home.",
        description: (
            <>
                <h3>Description:</h3>
                I wanted to make a project that helped give an overview of all home-related elements. 
                The Home Helper project is a Python/Django project that is easily scalable to incorporate any home application.
                It currently has a chore-tracker, with plans of adding an air quality panel utilizing the BME680 sensor.
            </>
        ),
        experience: (
            <>
                <h3>Experience gained:</h3>
                I learned to work with <b>Python/Django</b> to create scalable applications. The <b>template</b> functionality of Django helped create a more uniform look and feel of the project.
            </>
        ),
        technologies: ["Python/Django", "JavaScript", "SQLite", "HTML", "Bootstrap"],
        github:"https://github.com/Flaiizor/home-helper",
    },
    {
        type: "Semester Project",
        title: "TRACE-Q: Trajectory Reduction using Accuracy Control for Reliable Querying",
        description: 
        (
            <>
                <h3>Description:</h3>
                8th semester project, focused on trajectory simplification while maintaining high queryability. 
                By incorporating query accuracy as a major factor in the simplification process, allowing for compression of data while maintaining high queryability.
            </>
        ),
        experience:
        (
            <>
                <h3>Experience gained:</h3>
                Working with <b>C++</b> on large data sets of trajectory data was a valuable learning experience. 
                I was in charge of developing the API endpoints using <b>Boost Beast</b>, which gave great experience in API development.
            </>
        ),
        technologies: ["C++", "Boost Beast"],
        github:"https://github.com/KarmaKamikaze/TRACE-Q",
        paper: "/Trace-Q_Paper.pdf"
    },
    {
        type: "Personal Project",
        title: "A Personal Portfolio Website",
        description: (
            <>
                <h3>Description:</h3>
                A website I made for myself to better my skills of frontend development.
                I am always ready to learn (or re-learn) new skills!
                <br/>
                Fun fact: This portfolio website has been shamelessly stolen! Check out the copycat <a href="https://www.peterschwartzlauridsen.com/" target="_blank" rel="noopener noreferrer">here</a>!
            </>
        ),
        technologies: ["JavaScript", "React", "HTML", "CSS", "AWS"],
        github:"https://github.com/Flaiizor/portfolio",
    }
];

export default function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h1>{project.title}</h1>
                        <h2>{project.type}</h2>
                        <p>{project.description}</p>
                        <p>{project.experience}</p>
                        

                        <div className="card-footer">
                            <ul>
                                <h3>Project tech stack:</h3>
                                {project.technologies.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-button github-link">
                                    <img src={githubIcon} alt="GitHub" className="projects-icon" />
                                    GitHub
                                </a>
                            )}
                            {project.paper && (
                                <a href={project.paper} target="_blank" rel="noopener noreferrer" className="link-button paper-link">
                                    <img src={pdfIcon} alt="PDF" className="projects-icon" />
                                    Paper
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
