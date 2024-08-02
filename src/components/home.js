import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "./css/home.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ProjectCard from "./projectcard";
import CircularProgressBar from "./circular-progress";
import ExpCard from "./Expcard";
import Footer from "./footer";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Movetotop from "./movetotop";
import Hoverprofile from "./hoverprofile";
import Resume from "./resume"

const Home = () => {
  // Reference to the element you want to scroll to
  const aboutRef = useRef(null);
  const [progress, setProgress] = React.useState(0);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  useEffect(() => {
    const scrollToHash = () => {
      switch (window.location.hash) {
        case "#about":
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
          break;

        case "#services":
          servicesRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        case "#team":
          teamRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          // Default behavior when no hash is present
          break;
      }
    };

    scrollToHash(); // Scroll on initial page load

    // Scroll to the corresponding section when the hash changes
    window.addEventListener("hashchange", scrollToHash);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);
  const [bgdiv, setbgdiv] = useState(false);
  const projects = [
    {
      title: "Armour mall",
      description: "An E-commerce website on my own unique idea ",
      imageUrl: "https://via.placeholder.com/150",
      techs:
        "React js | Bootstrap | Vanila CSS | Hooks | Context API | States | Animations",
    },
    {
      title: "Mytodoapp",
      description: "My Todo list app which perform CRUD in reactjs ",
      imageUrl: "https://via.placeholder.com/150",
      techs: "React js | Bootstrap | Vanila CSS | CRUD",
    },
    {
      title: "Portfolio",
      description: "My personal portfolio of web dev",
      imageUrl: "https://via.placeholder.com/150",
      techs:
        "React js | Bootstrap | Vanila CSS | Framer-motion | States | Hooks",
    },
  ];
  const experience = [
    {
      title: "Internship at Zai Systems",
      description:
        "Frontend Web Development Internship (May 2023 - Aug 2023) Responsibilities included making websites fully responsive and styling",
      icon: <FontAwesomeIcon icon={faUserGraduate} />,
    },
    {
      title: "Self-Employed",
      description:
        "Working on website development for 1 year, focusing on ReactJS and NextJS for the last 6 months.",
      icon: <FontAwesomeIcon icon={faUserTie} />,
    },
  ];
  const [bgColor, setBgColor] = useState("black");
  const [textColor, setTextColor] = useState("white");

  const [exist, setexist] = useState(false);
  const [pro, setpro] = useState(false);
  const [edu, setedu] = useState(false);
  const [exp, setexp] = useState(false);
  const [skill, setskill] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    let halfHeight, lheight, eheight, expheight, skillheight;
    const HandleScroll = () => {
      if (windowWidth <= 400) {
        halfHeight = window.innerHeight * 3.75;
        lheight = window.innerHeight * 1.75;
        eheight = window.innerHeight * 1;
        expheight = window.innerHeight * 4;
        skillheight = window.innerHeight * 4.5;
      } else {
        halfHeight = window.innerHeight * 3.75;
        lheight = window.innerHeight * 1.75;
        eheight = window.innerHeight * 1;
        expheight = window.innerHeight * 2.5;
        skillheight = window.innerHeight * 3;
      }
      const scrollTop = window.scrollY;

      if (scrollTop > halfHeight) {
        setexist(true);
      } else {
        setexist(false);
      }
      if (scrollTop > lheight) {
        setpro(true);
      }
      if (scrollTop > eheight) {
        setedu(true);
      }
      if (scrollTop > expheight) {
        setexp(true);
      }
      if (scrollTop > skillheight) {
        setskill(true);
      }
    };

    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
  }, []);
  const [imgSrc, setImgSrc] = useState("/ja.png");
  // Hover event handlers
  const [HoverprofileCon, setHoverprofileCon] = useState(false);

  const handleMouseEnter = () => {
    setHoverprofileCon(true);
  };

  const handleMouseLeave = () => {
    setHoverprofileCon(false);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 75) {
          clearInterval(intervalId);
          return 75;
        }
        return prevProgress + 1;
      });
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      className="par-ent"
      initial={{ opacity: 0 }} // Initial animation state (opacity set to 0)
      animate={{ opacity: 1 }} // Animation state when component mounts (opacity set to 1)
      exit={{ opacity: 0 }} // Animation state when component unmounts (opacity set to 0)
      transition={{ duration: 1.5 }}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      <Container fluid>
        <Row className="justify-content-center align-items-center mb-5">
          <Col md={6}>
            <motion.div
              className="intro"
              initial={{ x: -60, opacity: 0 }} // Initial animation state (move left and fade in)
              animate={{ x: 0, opacity: 1 }} // Animation state when component mounts (move to original position and fade in)
              transition={{ duration: 1.5, delay: 0 }} // Duration of the animation with a delay
            >
              <p>
                Assalam o Alikum <span className="greeting">Haroon latif</span>{" "}
                here <br /> I am a{" "}
                <span className="greeting">full stack web developer</span> I
                have 2 years of experience in creating websites and have 6
                months experience in ReactJS , remixJs and in Django with MySql
                db{" "}
              </p>
              <Button variant="outline-light" className="bt">
                {" "}
                Lets talk
              </Button>
            </motion.div>
          </Col>
          <Col md={6}>
            {HoverprofileCon ? (
              <>
                <motion.div
                  className="imag"

                  initial={{ x: 100, opacity: 0 }} // Initial animation state (move right and fade in)
                  animate={{ x: 0, opacity: 1 }} // Animation state when component mounts (move to original position and fade in)
                  transition={{ duration: 2.5, delay: 3 }} // Duration of the animation with a delay
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Hoverprofile />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="imag"
                  initial={{ x: 100, opacity: 0 }} // Initial animation state (move right and fade in)
                  animate={{ x: 0, opacity: 1 }} // Animation state when component mounts (move to original position and fade in)
                  transition={{ duration: 2.5, delay: 0 }} // Duration of the animation with a delay
                  onMouseEnter={handleMouseEnter} // Set the event handler for mouse enter
                  onMouseLeave={handleMouseLeave} // Set the event handler for mouse leave
                >
                  <img
                    src={imgSrc}
                    alt="Not found"
                    width={"500px"}
                    className="img-fluid imagi"
                  />
                </motion.div>
              </>
            )}
          </Col>
        </Row>
        <Row className=" align-items-center mb-5">
          <Col md={12}>
            <motion.div
              className="imag"
              initial={{ x: 100, opacity: 0 }} // Initial animation state (move right and fade in)
              animate={{ x: 0, opacity: 1 }} // Animation state when component mounts (move to original position and fade in)
              transition={{ duration: 1.5, delay: 0 }} // Duration of the animation with a delay
            >
              <img src="/dotted.png" alt="Not found" className="img-fluid" />
            </motion.div>
          </Col>
        </Row>
        {edu && (
          <Row
            className="justify-content-center flying-image mb-5 "
            style={{ paddingBottom: "50px" }}
          >
            <h2 className="edu mb-5">Education</h2>

            <Col md={8}>
              <div className="custom-card">
                <Card
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                    padding: "20px",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      Associate degree in Computer Science
                    </Card.Title>
                    <Card.Text>
                      Currently getting education of Computer sciences from
                      National College of business administration & economics
                      (NCBA&E-WCC) 2022 - Present
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        )}

        {pro && (
          <motion.div
            className="imag"
            id="projects"
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }} // Animation state when component mounts (move to original position and fade in)
            transition={{ duration: 2.5, delay: 0 }} // Duration of the animation with a delay
          >
            <div className="container mb-5">
              <Row>
                <h2 className="edu mb-4">My work</h2>
                {projects.map((project, index) => (
                  <Col key={index} md={4} className="d-flex flex-wrap">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      techs={project.techs}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </motion.div>
        )}
        {exp && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }} // Initial state: invisible and to the left of the screen
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            <div>
              <div>
                <h2 className="edu mb-5">Experience</h2>

                <Row className="mb-5  back1">
                  {experience.map((exp, index) => (
                    <Col key={index} md={4} className="d-flex flex-wrap">
                      <ExpCard
                        title={exp.title}
                        description={exp.description}
                        icon={exp.icon}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </motion.div>
        )}
        {skill && (
          <>
            <Container className="back">
              <Row className="justify-content-center mb-5">
                <Col md={8}>
                  <motion.div
                    className="resume-subsection"
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0 }}
                  >
                    <h2 className="edu mb-5">Core Skills</h2>
                    <div className="skill-circle d-flex flex-wrap justify-content-center">
                      <>
                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="circle m-3">
                            <p>HTML</p>
                            <img
                              src="/html.png"
                              alt="Not found"
                              className="circle-image"
                              height={"20px"}
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <div className="circle m-3">
                            <p>CSS</p>
                            <img
                              src="/css1.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <div className="circle2 m-3 pulse">
                            <p>JS</p>
                            <img
                              src="/js.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="circle3 m-3 pulse">
                            <p>REACTJS</p>
                            <img
                              src="/react.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>
                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <div className="circle m-3">
                            <p>PYTHON</p>
                            <img
                              src="/python.jpg"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>
                      </>
                      <>
                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <div className="circle m-3">
                            <p style={{ fontSize: "13px" }}>MATPLOTLIB</p>
                            <img
                              src="/matplotlib.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <div className="circle m-3">
                            <p>NUMPY</p>
                            <img
                              src="/numpy.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="circle3 m-3">
                            <p>PANDAS</p>
                            <img
                              src="/pandas.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <div className="circle m-3">
                            <p>POWER BI</p>
                            <img
                              src="/powerbi.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>
                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.9 }}
                        >
                          <div className="circle3 m-3 pulse">
                            <p>NEXTJS</p>
                            <img
                              src="/nextjs.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>
                      </>

                      <>
                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <div className="circle m-3 ">
                            <p style={{ fontSize: "13px" }}>BOOTSTRAP</p>
                            <img
                              src="/bootstrap.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <div className="circle3 m-3 pulse">
                            <p>DJANGO</p>
                            <img
                              src="/django.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          className="skill"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="circle2 m-3 pulse ">
                            <p>SQL</p>
                            <img
                              src="/sql.png"
                              alt="Not found"
                              className="circle-image"
                            />
                          </div>
                        </motion.div>
                      </>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </>
        )}
        <Row className="resume-section">
          <Row>
            <Col md={4}>
              <motion.div
                className="resume-subsection"
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.1 }}
              ></motion.div>
            </Col>
          </Row>
          {exist && (
            <Container style={{ paddingTop: "10vh" }}>
              <Row className="justify-content-center align-items-center mb-5 d-flex flex-wrap">
                <Col md={6} xs={12} className="mb-4">
                  <motion.div
                    initial={{ x: -140, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2.5, delay: 0.1 }}
                  >
                    <h2 className="text-center text-secondary">
                      Leetcode Journey
                    </h2>
                    <div className="text-center text-secondary">
                      <div className="p-3">
                        <p>
                          My journey on Leetcode has been exciting and
                          challenging. I have been solving problems regularly
                          and improving my problem-solving skills. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Col>
                <Col md={6} xs={12}>
                  <motion.div
                    className="imag"
                    initial={{ x: -120, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2.5, delay: 0.1 }}
                  >
                    <div className="p-3 d-flex justify-content-center align-items-center">
                      <div className="p-3 d-flex justify-content-center align-items-center">
                        <CircularProgressBar
                          percent={progress}
                          size={200}
                          color="#ffb700"
                          backgroundColor="#f0f0f0"
                          animationDuration={3000}
                        />
                        <div className="text-center ml-3">
                          <h2>{progress}</h2>
                          <p>problems solved</p>
                          <p className="p01" style={{color:"green"}}>Easy: 19</p>
                          <p  className="p01" style={{color:"#ffb700"}}>Medium: 53</p>
                          <p  className="p01" style={{color:"red"}}>Hard: 03</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          )}
        </Row>
      </Container>
      <Container>
        <motion.div    initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.1 }}>
           <Resume/>
        </motion.div>
      </Container>
      <Movetotop />
      <Footer />
    </motion.div>
  );
};

export default Home;
