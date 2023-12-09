import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <a href="mailto:vidit@gatech.edu" className="footer__link"></a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ecohealth.plus">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" target="_blank" rel="noopener noreferrer" href="mailto:someone@example.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
