import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectsCards";
import '../Projects/Projects.css';

import bbr from '../assets/projectImages/bookback.jpg'
import budget from '../assets/projectImages/budgetTracker.png'
import ecommerce from '../assets/projectImages/ecommerce.gif'
import passGen from '../assets/projectImages/InitialPassGen.png'
import mealTime from '../assets/projectImages/mealTime.png'
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
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={bbr}
                    title="Best Book Review"
                    description="add description"
                    link="https://github.com/soumyajit4419/Chatify"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={budget}
                    title="Best Book Review"
                    description="add description"
                    link="https://github.com/JoNoC0/budget-tracker"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={ecommerce}
                    title="Best Book Review"
                    description="add description"
                    link="https://github.com/JoNoC0/ecommerce"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={passGen}
                    title="Best Book Review"
                    description="add description"
                    link="https://github.com/JoNoC0/passwordgen"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={mealTime}
                    title="Best Book Review"
                    description="add description"
                    link="https://github.com/JoNoC0/MealTime"
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={teamProfile}
                    title="Best Book Review"
                    description="add description"
                    link="https://github.com/JoNoC0/team-profile-generator"
                    />
                </Col>
            </Row>
        </Container>

    )
}

export default Projects;