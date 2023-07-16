import React from 'react';
import '../styles/AboutSection.css';
import SectionTitle from './SectionTitle';

function AboutSection() {
    return (
        <div className='about-section' id='About'>
            <SectionTitle 
                title='who i am'
            />

            <p className="about-description">
            Hello there! I'm a 21-year-old guy with a love for web development. I enjoy creating beautiful and accurate websites that you can see and interact with. Learning about new technologies excites me, and I always keep an eye out for the latest trends. When I'm not working on websites, I like to explore my artistic side by drawing incredibly realistic pencil sketches.
            <br />
            <br />
            Welcome to my portfolio website, where I share my passion for both web development and art!
            </p>
        </div>
    );
}

export default AboutSection