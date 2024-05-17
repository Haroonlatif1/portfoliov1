import React from 'react';
import { Card } from 'react-bootstrap';
import "./css/home.css";
const ProjectCard = ({ title, description,icon }) => {
  
  return (
    <Card style={{ width: '18rem', margin: '20px',height:"auto","background":'transparent',"border":"none" }} className='trans appear' >
      <Card.Body style={{color:"gray"}} >
        <Card.Title className='text-light'>{title} {icon}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
