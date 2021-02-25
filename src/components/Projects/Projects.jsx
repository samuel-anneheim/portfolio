import React, {useState} from 'react';
import './projects.css';
import bierre from '../../img/bgBierre.jpg';

export const Projects = () => {
    const [inHover, setHover] = useState(false);

    const test = document.getElementById('holla')
    let holla
    // let salut

    let style = {
        background: inHover ? `url(${bierre}) center no-repeat`  : `transparent`,
        backgroundSize: inHover ? 'cover' : 'initial',
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
            {/* <article className="un" id="un">
                <h1
                onMouseOver={changeback(true, 'un', bierre)}
                onMouseLeave={changeback(false)}>Projet 1</h1>
            </article> */}
            <article className="deux">
                <h1>Projet 1</h1>
            </article>
            <article className="trois" >
                <h1 >Projet 12</h1>
            </article>
            <article className="quatre" id="holla" style={style} >

                <h1 id="test" onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>Projet 1</h1>

            </article>
        </section>
    );
}