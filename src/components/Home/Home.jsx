import React from 'react';
import './home.css'
import { zoomIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const zoomInAnimation = keyframes`${zoomIn}`;
const ZoomInDiv = styled.div`
    animation 3s ${zoomInAnimation}
`;


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
                    <ZoomInDiv>
                        <div className="explore">
                            Explore projects
                        </div>
                    </ZoomInDiv>
                </article>
            </div>
        </section>
    );
}