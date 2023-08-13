import React, { useEffect, useState } from 'react';
import '../styles/Footer.css';

import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const [show, setShow] = useState(false);

    const transitionRocket = () => {
        if(window.scrollY > 600) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionRocket);
    
        return () => {
            window.removeEventListener('scroll', transitionRocket);
        }
    }, []);

    return (
        <div className='footer'>
            <div className="social-links-container">
                <a href="https://www.facebook.com/xtechilad" className="social-link fa-facebook" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faFacebookF} />
                </a>

                <a href="https://www.twitter.com/xtechilad" className="social-link fa-twitter" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faTwitter} />
                </a>

                <a href="https://www.instagram.com/xtechilad" className="social-link fa-instagram" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faInstagram} />
                </a>

                <a href="https://www.github.com/priyanshusharma0326" className="social-link fa-github" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faGithub} />
                </a>

                <a href="https://www.linkedin.com/in/priyanshusharma0326" className="social-link fa-linkedin" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='fa-social' icon={faLinkedinIn} />
                </a>
            </div>

            {show && <Link 
                className="footer-icon-container" 
                to="Home" 
                smooth={true} 
                duration={400} 
                offset={-50}
            >
                <FontAwesomeIcon className='fa-rocket' icon={faRocket} />

                <span className="tooltip-text">Head on top!</span>
            </Link>}

            <p className="footer-credits">
                ©Priyanshu Sharma 2023
            </p>
        </div>
    );
}

export default Footer;
