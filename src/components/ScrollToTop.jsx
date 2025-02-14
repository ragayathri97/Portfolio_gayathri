import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../components/ScrollToTop.css'; // Import the CSS
import scrollImage from "../assets/images/top.png"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <motion.button
        className="scroll-to-top-button" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={scrollImage}
          alt="Scroll to Top"
          className="w-12 h-12 rounded-full shadow-lg"
        />
      </motion.button>
    )
  );
};

export default ScrollToTop;
