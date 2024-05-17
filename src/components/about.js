import React from 'react';
import { motion } from 'framer-motion';
import "./css/about.css";
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: -50 }} // Initial animation state (fade in from top)
      animate={{ opacity: 1, y: 0 }} // Animation state when component mounts (fade in and move to original position)
      exit={{ opacity: 0 }} // Animation state when component unmounts (fade out)
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="about-content">
              <h2>About Me</h2>
              <p>
              Meet Haroon Latif, a skilled frontend web developer with 2 years of experience crafting captivating websites. Armed with 6 months of specialized expertise in ReactJS, Haroon seamlessly blends his talents in Laravel, SQL, and Python's data analysis frameworks. With passion for simplicity and elegance, he transforms complex challenges into user-friendly solutions, making him a sought-after asset in the ever-evolving world of web development.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default About;
