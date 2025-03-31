import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

export default function NavBar() {
    
    return (
        <nav id="nav" className="nav">
            <a href="#">Martin Langgaard Jacobsen</a>
            <ul>
                <li>
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>
    );
}
