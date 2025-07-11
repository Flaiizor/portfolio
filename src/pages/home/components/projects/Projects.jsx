import React from "react";
import "./Projects.css";
import githubIcon from "../../images/githubIcon.png";
import pdfIcon from "../../images/pdfIcon.png";


const projects = [
    {
        type: "Master's Thesis",
        title: "AR for Enhanced Video Viewing During Cardio Exercise",
        description: "When exercising, especially during indoor machine cardio, many make exercising more enjoyable by watching TV shows or other forms of visual content. However, the current viewing experience is poor, as people use their phone with a small screen. In our research, we investigate the use of Augmented Reality to achieve the best viewing experience for cardio exercise, by dynamically adjusting screen size based on exercise intensity.",
        technologies: ["C#", "Unity", "Python"],
        github:"https://github.com/Kristoffermg/AR-for-Enhanced-Video-Viewing-During-Cardio-Exercise",
        paper: "/master_thesis.pdf"
    },
    {
        type: "Bachelor's Project",
        title: "Exploring DETR for Recognition and Detection of Traffic Signs",
        description: "This project is focused on machine vision detecting traffic signs to aid self-driving cars. We explore the viability of the DETR algorithm to perform real-time traffic sign detection. Our findings indicate that, while DETR is able to perform real-time detection, it is not comparable to other state-of-the-art models like YOLO and R-CNN.",
        technologies: ["Python", "PyTorch"],
        github:"https://github.com/Traffic-sign-detection-P6AAU",
        paper: "/Bachelor_project.pdf"
    },
    {
        type: "Personal Project",
        title: "A Yu-Gi-Oh! API application in Java",
        description: (
            <>
                A RESTful API project using the <a href="https://ygoprodeck.com/api-guide/" target="_blank" rel="noopener noreferrer">ygoprodeck api</a>. This project is made in Java using Spring Boot.
            </>
        ),
        technologies: ["Java", "Spring Boot", "REST API"],
        github:"https://github.com/Flaiizor/yugioh-api",
    },
    {
        type: "Personal Project",
        title: "A Personal Portfolio Website",
        description: (
            <>
                A website I made for myself to better my skills of frontend development.
                I am always ready to learn (or re-learn) new skills!
            <br /><br />
                Fun fact: This portfolio website has been shamelessly stolen! Check out the copycat <a href="https://www.peterschwartzlauridsen.com/" target="_blank" rel="noopener noreferrer">here</a>!
            </>
        ),
        technologies: ["JavaScript", "React", "HTML", "CSS", "AWS"],
        github:"https://github.com/Flaiizor/portfolio",
    },
    {
        type: "Semester Project",
        title: "TRACE-Q: Trajectory Reduction using Accuracy Control for Reliable Querying",
        description: "8th semester project, focused on trajectory simplification while maintaining high queryability. I was mainly in charge of setting up the various endpoints of the API using Boost Beast. ",
        technologies: ["C++"],
        github:"https://github.com/KarmaKamikaze/TRACE-Q",
        paper: "/Trace-Q_Paper.pdf"
    }
];

export default function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h1>{project.type}</h1>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>

                        <div className="card-footer">
                            <ul>
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
