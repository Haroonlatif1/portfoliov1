import React from 'react';
import { Card } from 'react-bootstrap';
import "./css/home.css";
const ProjectCard = ({ title, description, imageUrl,techs }) => {
  
  return (
    <Card style={{ width: '17rem', margin: '20px',height:"auto","background":'transparent',"border":"none" }} className='trans neon-border ' >
      <Card.Img variant="top" style={{maxHeight:"12rem"}} src={imageUrl} alt={title} />
      <Card.Body className='text-secondary' >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          <br/>
          <strong style={{color:"#ff00cc"}}>{techs}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
