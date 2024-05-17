import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap"
import "./css/footer.css"
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Modalpopup from "./modalpopup"

const Footer = () => {
  const [SuccessModalOpen, setSuccessModalOpen] = useState(false); // popup control
  const [text, settext] = useState("")
  const [email, setemail] = useState("")

const modal_con_func=()=>{
  if(text==="" || email==="")
  {
    setSuccessModalOpen(false)
  }
  else{
    setSuccessModalOpen(true)
  setTimeout(() => {
    setSuccessModalOpen(false)
  },2000);
  }
}
  const handleClear=(e)=>{
    e.preventDefault()
settext("")
  }
  const changehandler=(e)=>{
    settext(e.target.value)
  }
  const emailhandler=(e)=>{
    setemail(e.target.value)
  }
  return (
    <footer id='section1' className="footer " >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>Connect with me</h3>
            <ul className="social-icons">
              <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
            <p className='div1para'><FontAwesomeIcon icon={faPhone} color='white'/> +92 309 148793
            <br/><FontAwesomeIcon icon={faEnvelope} color='white' /> Haroonlatif33@gmail.com</p>
            <p className='div1para1'>As an aspiring professional committed to driving impactful change and contributing to innovative projects, I am genuinely excited about the opportunity to connect with you.My dedication to continuous learning and growth, combined with my proactive approach to problem-solving, enables me to thrive in dynamic environments and deliver results that exceed expectations.</p>
          </div>
          <div className="col-lg-6 form p-4"style={{backgroundColor:"black"}}>
            <h3 className='mb-4'>Contact Me</h3>
            <form>
              <div className="form-group">
                <input type="text" className="form-control mb-2" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control mb-2" placeholder="Your Email" value={email} onChange={emailhandler} />
              </div>
              <div className="form-group text-area ">
                <textarea className="form-control mb-2" rows="3" placeholder="Message" value={text} onChange={changehandler}></textarea>
                {text && (<button className=' clear-button' onClick={handleClear}><FontAwesomeIcon icon={faTimes}/></button>)}
              </div>
              <Button variant="outline-light" onClick={modal_con_func}>Send message</Button>
              <Modalpopup isOpen={SuccessModalOpen} /> 
            </form>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 "style={{fontSize:"12px"}}>
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
    </footer>
  );
};

export default Footer;
