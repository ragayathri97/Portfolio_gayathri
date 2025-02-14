import React from "react";
import "./AboutMe.css";
import girldev from "../../assets/images/girldev.png";

const AboutMe = () => {
    return (
        <div className="about-container-out content-width">
        <div className="about-container">
           <h2>About Me</h2>
            <div className="flex-element">
                <div className="about-text">
                    <h3>Introduction</h3>
                    <p>
                        Hi, I'm Gayathri, a passionate Frontend React Developer with a love for building clean, interactive, and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I specialize in React and its ecosystem, including Redux, React Router, and modern UI/UX design practices.
                        at Masai School with hands-on experience in individual and collaborative projects.
                        Seeking an opportunity to apply the skills and knowledge while continuing to learn and grow in this dynamic field.
                    </p>

                    <p><strong>Gayathri</strong></p>
                    <p>📞 +91-9087593297</p>
                    <p>📧 ragayathri97@gmail.com</p>
                    <p>🔗 <a href="https://github.com/ragayathri97" target="_blank" >GitHub: ragayathri97</a></p>
                    <p>🔗 <a href="https://www.linkedin.com/in/gayathri-r-32b811239/" target="_blank" >LinkedIn: ragayathri97</a></p>
                    <p>📜 <a href="https://drive.google.com/file/d/13BA7G09xXkehQRoApOYZl7DNFlhipBEb/view?usp=sharing" target="_blank" >Resume</a></p>
                </div>
                <div className="about-content">
                <img src={girldev} alt="Coder Animation" className="girldev" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;
