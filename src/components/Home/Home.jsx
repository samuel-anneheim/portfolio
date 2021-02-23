import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

export const Home = () => {
    return (
        <section className="container-home">
            <div className="container-bundle">
                <article className="container-presentation center">
                    <div className="presentation">
                        <h2>Let's start <br /> <span>to coding </span></h2>
                        <p>Hi, i'm your new developer fullstack</p>
                    </div>
                </article>
                <article className="container-explore center">
                    <div className="explore">
                        <Link to="/projets">
                            Explore projects
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
}