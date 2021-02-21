import React from 'react';
import './footer.css'
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import outlook from '../../img/outlook.png';

export const Footer = () => {
    return (
        <footer>
            <figure>
                <img src={linkedin} alt="logo_linkedin" require />
            </figure>
            <figure>
                <img src={github} alt="logo_github" />
            </figure>
            <figure>
                <img src={outlook} alt="logo_outlook" />
            </figure>
        </footer>
    );
}