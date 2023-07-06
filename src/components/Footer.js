import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className="footerPage">
        <div className="footer-icons">
          <a
            href="https://github.com/joshsandquist"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-sandquist-5a14bb166/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://stackoverflow.com/users/22186489/jsandquist"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;