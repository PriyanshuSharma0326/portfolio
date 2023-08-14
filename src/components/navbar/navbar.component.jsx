import React, { useEffect, useState } from 'react';
import './navbar.styles.scss';

import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavigationMenu } from '../../constants/index';

function Navbar() {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    const displayMenu = () => {
        if(menu) {
            setMenu(false);
        }
        else {
            setMenu(true);
        }
    }

    const hideMenu = () => {
        setMenu(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
    
        return () => {
            window.removeEventListener('scroll', transitionNavbar);
        }
    }, []);

    return (
        <>
            <div className={`navbar ${show && 'navbar-black'}`}>
                <div className="navbar-contents">
                    <div className="nav-logo">
                        <a href='https://www.github.com/priyanshusharma0326' className="nav-title" target='_blank' rel='noreferrer'>Priyanshu sharma</a>
                    </div>

                    <div className="nav-links">
                        <Link 
                            className="nav-link" 
                            to="About" 
                            smooth={true} 
                            duration={100} 
                        >
                            About
                        </Link>
                        <Link 
                            className="nav-link" 
                            to="Skills" 
                            smooth={true} 
                            duration={100} 
                        >
                            Skills
                        </Link>
                        <Link 
                            className="nav-link" 
                            to="Projects" 
                            smooth={true} 
                            duration={100} 
                        >
                            Projects
                        </Link>
                        <Link 
                            className="nav-link" 
                            to="Contact" 
                            smooth={true} 
                            duration={100} 
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="section-menu">
                        <FontAwesomeIcon 
                            className='fa-bars' 
                            icon={faBars} 
                            onClick={displayMenu}
                        />
                    </div>
                </div>
            </div>

            {menu && <NavigationMenu 
                hideMenu={hideMenu} 
            />}
        </>
    );
}

export default Navbar;
