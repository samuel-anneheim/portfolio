import React, { useState } from 'react';
import './projects.css';
import bierre from '../../img/bgBierre.jpg';
import manga from '../../img/manga.jpg'
import meteo from '../../img/meteo.jpg'
import movie from '../../img/movie.jpg'
import { Link } from 'react-router-dom';

export const Projects = () => {
    const [inHoverManga, setHoverManga] = useState(false);
    const [inHoverBierre, setHoverBierre] = useState(false);
    const [inHoverMeteo, setHoverMeteo] = useState(false);
    const [inHoverMovie, setHoverMovie] = useState(false);


    let styleBierre = {
        background: inHoverBierre ? `url(${bierre}) center 70% no-repeat` : `transparent`,
        backgroundSize: inHoverBierre ? 'cover' : 'initial',
        animation: inHoverBierre ? 'back 800ms' : '',
        transition: inHoverBierre ? 'all 800ms' : '',
    }
    let styleManga = {
        background: inHoverManga ? `url(${manga}) center 70% no-repeat` : `transparent`,
        backgroundSize: inHoverManga ? 'cover' : 'initial',
        animation: inHoverManga ? 'back 800ms' : '',
        transition: inHoverManga ? 'all 800ms' : '',
    }
    let styleMeteo = {
        background: inHoverMeteo ? `url(${meteo}) center 70% no-repeat` : `transparent`,
        backgroundSize: inHoverMeteo ? 'cover' : 'initial',
        animation: inHoverMeteo ? 'back 800ms' : '',
        transition: inHoverMeteo ? 'all 800ms' : '',
    }
    let styleMovie = {
        background: inHoverMovie ? `url(${movie}) center 70% no-repeat` : `transparent`,
        backgroundSize: inHoverMovie ? 'cover' : 'initial',
        animation: inHoverMovie ? 'back 800ms' : '',
        transition: inHoverMovie ? 'all 800ms' : '',
    }


    // function changeback(img) {
    //     if (test) {
    //         test.style.background = `url(${img})`;
    //     }
    // }
    // function removeback() {
    //     if (test) {
    //         test.style.background = 'transaprent';
    //     };
    // }
    //        
    // function changeback(verif, id, img) {
    //     setHover(verif)
    //     if (inHover === true){
    //         (document.getElementById(id).style.background = `url(${img}) center no-repeat`);
    //         (document.getElementById(id).style.backgroundSize = 'cover')
    //     }else{
    //        (document.getElementById(id).style.background = `transparent`)
    //     }
    // }

    // { inHover && ((test.style.background = `url(${bierre}) center no-repeat`) && (test.style.backgroundSize = 'cover')) };
    // { inHover || ((test.style.background = `transparent`) && (test.style.backgroundSize = 'cover')) };

    return (
        <section className="container-projects">
            <article className="un" >
                <div style={styleMeteo}>
                </div>
                <Link to="/projets/meteo">
                    <h1 onMouseEnter={() => setHoverMeteo(true)}
                        onMouseLeave={() => setHoverMeteo(false)}>Application météo</h1>
                    <span>React native / API</span>
                </Link>
            </article>

            <article className="deux">
                <div style={styleMovie}>
                </div>

                <h1 onMouseEnter={() => setHoverMovie(true)}
                    onMouseLeave={() => setHoverMovie(false)}>Api film</h1>
                <span>HTML / CSS / React JS </span>

            </article>

            <article className="trois" >
                <div style={styleManga}>
                </div>

                <h1 onMouseEnter={() => setHoverManga(true)}
                    onMouseLeave={() => setHoverManga(false)}>Présentation manga</h1>
                <span>HTML / CSS / JS / PHP / MySQL</span>

            </article>

            <article className="quatre">
                <div style={styleBierre}>
                </div>

                <h1 onMouseEnter={() => setHoverBierre(true)}
                    onMouseLeave={() => setHoverBierre(false)}>BeerApp</h1>
                <span>React js / API</span>
            </article>
        </section>
    );
}