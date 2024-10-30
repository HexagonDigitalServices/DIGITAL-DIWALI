import React, { useEffect, useRef } from "react";
import "../Loop/Loop.css"; 

import windowsLogo from "../../assets/a1 (1).png";
import mitLogo from "../../assets/a1 (2).png";
import robinhoodLogo from "../../assets/a1 (3).png";
import sapLogo from "../../assets/a1 (4).png";
import krogerLogo from "../../assets/a1 (5).png";
import mediumLogo from "../../assets/a1 (6).png";
import logo1 from "../../assets/a1 (1).png";
import logo2 from "../../assets/a1 (8).png";
import logo3 from "../../assets/a1 (9).png";
import logo4 from "../../assets/a1 (10).png";
import logo5 from "../../assets/a1 (11).png";
import logo6 from "../../assets/a1 (12).png";

// Array of logos to display
const logos = [
  windowsLogo,
  mitLogo,
  robinhoodLogo,
  sapLogo,
  krogerLogo,
  mediumLogo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  
  
];

const BlurCarousel = () => {
  const trackRef = useRef(null); // Reference to track div

  useEffect(() => {
    const track = trackRef.current;
    let scrollPosition = 0;
    let animationFrame;

    const smoothScroll = () => {
      scrollPosition += 0.5; // Adjust speed of scroll (increase for faster scrolling)
      if (scrollPosition >= track.scrollWidth / 2) {
        scrollPosition = 0; // Reset scroll to loop seamlessly
      }
      track.scrollLeft = scrollPosition;
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);

    // Cleanup function on unmount
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="carousel-container">
      <div ref={trackRef} className="carousel-track">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
          className="carousel-item"
            style={{ width: "80px", height: "auto", margin: "0 16px" }}
          />
        ))}
      </div>

      {/* Gradient masks for blur effect */}
      <div className="gradient-mask left-0"></div>
      <div className="gradient-mask right-0"></div>
    </div>
  );
};

export default BlurCarousel;
