import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
    return (
        <Container className='projects'>
            <h1 className='projects-heading'>
                My Recent Projects
            </h1>  
            <p className='projects-sub'>
                Some of my recent projects.
            </p>
        </Container>
        
    )
}

export default Projects;