import React from 'react';
import sadaka from '../images/sadaka.png'
import legs from '../images/legs.png'
import orphelin from '../images/orphelin.png'
const Home = () => {
    return (
        <>
            <br /><br />
            <center><img src={orphelin} alt="Orphelin" /></center>
            <center><img src={sadaka} alt="Sadaka" /></center>
            <center><img src={legs} alt="Legs" /></center>
            <center>
                <iframe width="860" height="415" src="https://www.youtube.com/embed/pwej2j_35mo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
            </center>
        </>
    );
}

export default Home;