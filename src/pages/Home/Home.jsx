import React from 'react'
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import './Home.css' 

const Home = () => {
  return (
    <div className='homepage'>
      {/* Left section of the homepage (also the only section visible for mobile devices) */}
      <div className='homepage-left'>
        <h1>
          Hi, I'm Dobromir!
        </h1>
        <h2>
          {/* Component for typing effect with multiple strings */}
          <ReactTyped 
            strings={["Web Developer", "UI/UX Designer", "Tech Enthusiast"]} 
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>
        
        {/* Container for buttons */}
        <div className='buttons-container'>
          {/* Button linking to the projects page */}
          <button id='projects-button'>
            <Link to='/projects'>
              My projects
            </Link>
          </button>
          {/* Button for leading to my CV */}
          <button id='cv-button'>
            See my CV
          </button>
        </div>
      </div>

      {/* Right section of the homepage */}
      <div className='homepage-right'>
      </div>
    </div>
  )
}

export default Home
