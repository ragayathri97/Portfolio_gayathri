import React from 'react'
import { Link } from 'react-scroll'
import "./topContent.css"
import gayuimg from "../../assets/images/Gayuimg.jpeg";

const TopContent = () => {
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
            <a href='https://drive.google.com/file/d/1dqzXCj265WLPSxc02zlr244vShYy4f-C/view?usp=sharing'target="_blank" rel="noopener noreferrer">
                <button className='topContent_downloadButton'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
            <button className='topContent_workButton'>My Work</button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default TopContent;