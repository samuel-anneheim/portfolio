import React from 'react';
import './home.css'


export const Home = () => {
    return (
        <section>
            <article className="container-presentation">
                <div className="presentation">
                    <h2>Let's start <br /> to coding </h2>
                    <p>Hi, i'm your new developer fullstack</p>
                </div>
            </article>
            <article className="explore">
                Explore projects
            </article>
        </section>
    );
}