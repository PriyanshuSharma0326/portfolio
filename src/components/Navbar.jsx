import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
    
        return () => {
            window.removeEventListener('scroll', transitionNavbar);
        }
    }, []);

    return (
        <div className={`navbar ${show && 'navbar-black'}`}>
            <div className="navbar-contents">
                <div className="nav-logo">
                    <a href='https://www.github.com/priyanshusharma0326' className="nav-title" target='_blank' rel='noreferrer'>Priyanshu sharma</a>
                </div>

                <div className="nav-links">
                    <a href='#About' className="nav-link">About</a>
                    <a href='#Skills' className="nav-link">Skills</a>
                    <a href='#Projects' className="nav-link">Projects</a>
                    <a href='#Contact' className="nav-link">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
