import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectsCards";
import '../Projects/Projects.css';

import bbr from '../assets/projectImages/bookback.jpg'
import budget from '../assets/projectImages/budgetTracker.png'
import ecommerce from '../assets/projectImages/ecommerce.gif'
import passGen from '../assets/projectImages/InitialPassGen.png'
import fullfill from '../assets/projectImages/FULLfill.png'
import teamProfile from '../assets/projectImages/teamprofile.png'

function Projects() {
    return (
        <Container fluid className='project-section'>
            <h1 className='projects-title'>
                My Recent Projects
            </h1>
            <p className='projects-heading'>
                Some of my recent projects.
            </p>
            <div className='card-group'>

            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={bbr}
                    title="Best Book Review"
                    description="A user can leave a review to books listed on site"
                    link="https://github.com/soumyajit4419/Chatify"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={budget}
                    title="Budget Tracker"
                    description="Budget Tracker lets user keep track on their income, just like a balancing a checkbook!"
                    link="https://github.com/JoNoC0/budget-tracker"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={ecommerce}
                    title="E-Commerce"
                    description="A back-end application that enables the user to handle adjustments to company's inventory, pricing, and employees."
                    link="https://github.com/JoNoC0/ecommerce"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={passGen}
                    title="Password Generator"
                    description="A basic password generator for those who have difficulties coming up with their own."
                    link="https://github.com/JoNoC0/passwordgen"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={fullfill}
                    title="FULLfill!"
                    description="Baby gift registry for expecting mothers"
                    link="https://github.com/pardue95/group-5-project-3"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={teamProfile}
                    title="Team Profile Generator"
                    description="A CLI application that let users enter data for new employees and make changes to existing employees database."
                    link="https://github.com/JoNoC0/team-profile-generator"
                    />
                </Col>
            </Row>
            </div>
        </Container>

    )
}

export default Projects;