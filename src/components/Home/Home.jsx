import React from 'react';
import './home.css'



export const Home = () => {
    return (
        <section>
            <div className="container-bundle">
                <article className="container-presentation">
                    <div className="presentation">
                        <h2>Let's start <br /> <span>to coding </span></h2>
                        <p>Hi, i'm your new developer fullstack</p>
                    </div>
                </article>
                <article className="container-explore">
                        <div className="explore">
                            Explore projects
                        </div>
                </article>
            </div>
        </section>
    );
}