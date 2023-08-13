import React from 'react';
import './skill.styles.scss';

function Skill({icon, title}) {
    return (
        <div className="skill-container">
            <img src={require(`../../../public/assets/icons/${icon}`)} alt={title} className="skill-icon" />
        </div>
    );
}

export default Skill;
