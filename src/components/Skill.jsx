import React from 'react';
import '../styles/Skill.css';

function Skill({icon, title}) {
    return (
        <div className="skill-container">
            <img src={require(`../media/icons/${icon}`)} alt={title} className="skill-icon" />
        </div>
    );
}

export default Skill;
