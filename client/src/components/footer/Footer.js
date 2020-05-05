import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Footer () {
  return (
    <div className="footer-wrapper">
      <div className="about">
        <span className="bold">Altruize</span>
        <p>Bacon ipsum dolor amet salami frankfurter filet mignon shank, chislic biltong ham hock pastrami. Frankfurter meatball burgdoggen, cupim doner pastrami ball tip short loin alcatra landjaeger. Chislic pork chop hamburger short ribs tail doner frankfurter spare ribs t-bone bacon jerky kielbasa tenderloin ground round corned beef. Pork loin t-bone chuck fatback kevin strip steak chicken. Doner filet mignon tail, frankfurter alcatra burgdoggen ribeye sausage short loin ham bacon porchetta andouille.</p>
      </div>
      <div className="social-media">
        <span className="bold">Get in touch</span>
        <p>
          <li className="social-media-links">
            <span>Gerard Soldevilla </span>
            <div>
              <a href="https://github.com/gsolde"><FontAwesomeIcon icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/gerard-soldevila-lafoz-91ab46125/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </li>
          <li className="social-media-links">
            <span>Scott Burgess </span>
            <div>
              <a href="https://github.com/Scottburg"><FontAwesomeIcon icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/scott-burgess-a6368815/?originalSubdomain=uk"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </li>
          <li className="social-media-links">
            <span>Alejandro Gutiérrez</span>
            <div>
              <a href="https://github.com/AlejandroGutierrezB"><FontAwesomeIcon icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/alejandro-guti%C3%A9rrez-barcenilla-283b9811b/?originalSubdomain=es"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </li>
          <li className="social-media-links">
            <span>Leonard Schilcher</span>
            <div>
              <a href="https://github.com/LeonardvS"><FontAwesomeIcon icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/leonard-von-schilcher-758a7437/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </li>
        </p>
      </div>
    </div>
  );
}