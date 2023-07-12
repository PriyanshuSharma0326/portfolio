import React from 'react';
import '../styles/HeroSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
    return (
        <div id='Home' className='hero-container'>
            <div className='hero-section'>
            </div>

            <div className="hero-overlay">
            </div>

            <div className="hero-content">
                <h1 className='hero-title'>
                    Hi, I'm Priyanshu
                </h1>

                <h2 className="hero-description">
                    Web Developer & Front-End Enthusiast
                </h2>
            </div>

            <a href="#About">
                <FontAwesomeIcon className='fa-down' icon={faAngleDown} />
            </a>
        </div>
    );
}

export default HeroSection;
