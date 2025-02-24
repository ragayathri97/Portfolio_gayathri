import React from 'react';
import { Link } from 'react-scroll';
import "./topContent.css";
import gayuimg from "../../assets/images/Gayuimg.jpeg";
import resumePdf from "../../assets/resume/Gayathri_CV.pdf";

const TopContent = () => {
  const handleDownload = () => {
    window.open(resumePdf, '_blank');
    setTimeout(() => { 
      const link = document.createElement('a');
      link.href = resumePdf;
      link.download = 'Gayathri_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 100); 
  };

  return (
    <div className='banner-content content-width'>
      <div className='topContent flex-element'>
        <div className='topContent_image'>
          <img src={gayuimg} alt="gayuimg" />
        </div>
        <div className='topContent_container'>
          <span>Hello👋, I'm</span>
          <h1>Gayathri</h1>
          <p>A Professional Web and App Developer</p>
          <button className='topContent_downloadButton' onClick={handleDownload}>
            Download CV
          </button>
          <Link to='projects' smooth={true} duration={500}>
            <button className='topContent_workButton'>My Work</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopContent;