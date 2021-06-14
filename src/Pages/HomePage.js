import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Ahmed Errahali.</span>
                </h1>
                <p className="h-sub-text">
                    Multidisciplinary designer and programmer in beautiful Barcelona, ​​Spain.
                    I enjoy working on a multitude of different projects, from mobile and web
                    apps to branding and marketing websites. I also love technology because it
                    allows us to create new solutions to people's problems.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/ahmed.errahalibadih" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/Aerrahali" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://es.linkedin.com/in/ahmed-errahali-badih-03b945122" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
