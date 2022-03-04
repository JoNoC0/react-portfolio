import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { CardGroup } from "react-bootstrap";

function ProjectCards(props) {
  return (
<CardGroup md={4}>
    <Card md={4}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{ textAlign: "justify" }}>
        {props.description}
      </Card.Text>
      <Button variant="primary" href={props.link} target="_blank">
        <BiLinkExternal /> &nbsp;
        {props.isBlog ? "View Blog" : "View Project"}
      </Button>
    </Card.Body>

  <Card className="project-card-view text-center">
    <div className="overflow">
    
    </div>
    </Card>
  </Card>
</CardGroup>
);
}
    
export default ProjectCards;