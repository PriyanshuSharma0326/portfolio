import React from 'react';
import '../styles/SkillSection.css';
import SectionTitle from './SectionTitle';
import Skill from './Skill';

import { skills } from '../constants/SkillsList';

function SkillSection() {
    return (
        <div className='skill-section' id='Skills'>
            <SectionTitle 
                title='what i can do'
            />

            <h2 className="skill-section-phrase">
                As an enthusiastic learner in the fast-paced web development industry, I am always eager to expand my knowledge and skills. Here are
            </h2>

            <div className="skills-container">
                <h1 className='list-title'>some technologies i've worked with:</h1>

                <div className="skills-list">
                    {skills.map(skill => {
                        return (
                            <Skill 
                                {...skill} 
                                key={skill.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillSection;
