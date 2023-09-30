import React from 'react';
import './skill.styles.scss';

function Skill({icon, title}) {
    return (
        <div className="skill-container">
            {title === 'GoogleCloud' ? 
                <a href="https://www.cloudskillsboost.google/public_profiles/384a6e6f-67f9-4eb7-a021-a5d84513e9c5" target='_blank' rel='noreferrer' >
                    <img src={require(`../../../public/assets/icons/${icon}`)} alt={title} className="skill-icon" />
                </a> :
                <img src={require(`../../../public/assets/icons/${icon}`)} alt={title} className="skill-icon" />
            }
        </div>
    );
}

export default Skill;
