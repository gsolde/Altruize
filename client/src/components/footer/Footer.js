import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Footer () {
  return (
    <div className="footer-wrapper">
      <div className="social-media">
        <span className="bold">Get in touch</span>
        <ul>
          <li className="social-media-links">
            <span>Gerard Soldevila </span>
            <div>
              <a href="https://github.com/gsolde" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/gerard-soldevila-lafoz-91ab46125/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </li>
          <li className="social-media-links">
            <span>Scott Burgess </span>
            <div>
              <a href="https://github.com/Scottburg" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/scott-burgess-a6368815/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </li>
          <li className="social-media-links">
            <span>Alejandro Gutiérrez</span>
            <div>
              <a href="https://github.com/AlejandroGutierrezB" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/alejandro-guti%C3%A9rrez-barcenilla-283b9811b/?originalSubdomain=es" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </li>
          <li className="social-media-links">
            <span>Leonard Schilcher</span>
            <div>
              <a href="https://github.com/LeonardvS" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/leonard-von-schilcher-758a7437/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}