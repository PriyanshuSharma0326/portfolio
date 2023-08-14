import React from 'react';
import './navigation-menu.styles.scss';

import { Link } from 'react-scroll';

function NavigationMenu({ hideMenu }) {
    return (
        <div className="nav-menu">
            <div className="nav-menu-links">
                <Link 
                    className="nav-menu-link" 
                    to="About" 
                    smooth={true} 
                    duration={100} 
                    onClick={hideMenu} 
                >
                    About
                </Link>
                <Link 
                    className="nav-menu-link" 
                    to="Skills" 
                    smooth={true} 
                    duration={100} 
                    onClick={hideMenu} 
                >
                    Skills
                </Link>
                <Link 
                    className="nav-menu-link" 
                    to="Projects" 
                    smooth={true} 
                    duration={100} 
                    onClick={hideMenu} 
                >
                    Projects
                </Link>
                <Link 
                    className="nav-menu-link" 
                    to="Contact" 
                    smooth={true} 
                    duration={100} 
                    onClick={hideMenu} 
                >
                    Contact
                </Link>
                </div>
        </div>
    );
}

export default NavigationMenu;
