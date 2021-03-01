import React, { useState } from 'react';
import './projects.css';
import bierre from '../../img/bgBierre.jpg';
import manga from '../../img/manga.jpg'

export const Projects = () => {
    const [inHoverManga, setHoverManga] = useState(false);
    const [inHoverBierre, setHoverBierre] = useState(false);
    const [inHoverTest1, setHoverTest1] = useState(false);
    const [inHoverTest2, setHoverTest2] = useState(false);


    let styleBierre = {
        background: inHoverBierre ? `url(${bierre}) center no-repeat` : `transparent`,
        backgroundSize: inHoverBierre ? 'cover' : 'initial',
        animation: inHoverBierre ? 'back 800ms' : 'reverse 800ms',
        transition: inHoverBierre ? 'all 800ms' : 'all 800ms',
    }
    let styleManga = {
        background: inHoverManga ? `url(${manga}) center no-repeat` : `transparent`,
        backgroundSize: inHoverManga ? 'cover' : 'initial',
        animation: inHoverManga ? 'back 800ms' : 'reverse 800ms',
        transition: inHoverManga? 'all 800ms' : 'all 800ms',
    }
    let styleTest1 = {
        background: inHoverTest1 ? `url(${bierre}) center no-repeat` : `transparent`,
        backgroundSize: inHoverTest1 ? 'cover' : 'initial',
        animation: inHoverTest1 ? 'back 800ms' : 'reverse 800ms',
        transition: inHoverTest1 ? 'all 800ms' : 'all 800ms',
    }
    let styleTest2 = {
        background: inHoverTest2 ? `url(${bierre}) center no-repeat` : `transparent`,
        backgroundSize: inHoverTest2 ? 'cover' : 'initial',
        animation: inHoverTest2 ? 'back 800ms' : 'reverse 800ms',
        transition: inHoverTest2 ? 'all 800ms' : 'all 800ms',
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
                <div style={styleTest1}>
                </div>
                <h1 onMouseEnter={() => setHoverTest1(true)}
                    onMouseLeave={() => setHoverTest1(false)}>Projet 1</h1>
            </article>

            <article className="deux" >
                <div style={styleTest2}>
                </div>
                <h1 onMouseEnter={() => setHoverTest2(true)}
                    onMouseLeave={() => setHoverTest2(false)}>Projet 1</h1>
            </article>

            <article className="trois" >
                <div style={styleManga}>
                </div>
                <h1 onMouseEnter={() => setHoverManga(true)}
                    onMouseLeave={() => setHoverManga(false)}>Projet 12</h1>
            </article>

            <article className="quatre"  >
                <div style={styleBierre}>
                </div>
                <h1 onMouseEnter={() => setHoverBierre(true)}
                    onMouseLeave={() => setHoverBierre(false)}>Projet 1</h1>
            </article>
        </section>
    );
}