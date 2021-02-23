import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/'><h1>Samuel Anneheim</h1></Link>
                <ul> 
                    <Link to='/projets'><li>+ Project</li></Link>
                    <li> | </li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    )
} 
