import React, { useState, useEffect } from 'react';
import './css/movetotopcss.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Add event listener to window scroll event
        window.addEventListener('scroll', toggleVisibility);
       
    }, []);

    const toggleVisibility = () => {
        // Check if user has scrolled down enough to show the button
        if (window.pageYOffset > 1000) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        // Smooth scroll to top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && 
                <button className="scroll-to-top-btn trans" onClick={scrollToTop}>
                    <span><FontAwesomeIcon icon={faArrowUp}/></span>
                </button>
            }
        </div>
    );
};

export default ScrollToTopButton;
