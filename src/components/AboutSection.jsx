import React from 'react';
import '../styles/AboutSection.css';
import SectionTitle from './SectionTitle';

function AboutSection() {
    return (
        <div className='about-section' id='About'>
            <SectionTitle 
                title='who i am'
            />

            <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero in nihil quam quidem nisi. Ex ullam sed ut error est ab consectetur doloribus quae numquam, optio eius, perspiciatis possimus quidem magnam ipsa facere earum impedit labore debitis aut! Incidunt cupiditate ipsam eligendi accusantium aliquid cum? Nisi quaerat velit nesciunt ipsum?</p>
        </div>
    );
}

export default AboutSection