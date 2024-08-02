import React from 'react';
import { Button } from 'react-bootstrap';
import "./css/resume.css"

const Resume = () => {
  const handleDownload = () => {
    // Assuming your resume is a PDF file named "resume.pdf"
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="p-4" style={{ height: "100vh", backgroundColor: "black" }}>
      {/* Make sure the image path is correct */}
      <h1 className="text-white" style={{ textAlign: "center" }}>
        Download My Resume
      </h1>
      <div className='imag1'>
      <img src="/arrow.png" alt="No image found" height={"300px"}/>

      </div>

      <Button
        variant="outline-warning"
        style={{ display: "block", margin: "auto" }}
        onClick={handleDownload}
        className="but-pos"
      >
        Download Resume
      </Button>
    </div>
  );
};

export default Resume;