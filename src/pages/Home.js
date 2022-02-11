import React from 'react';
import sadaka from '../images/sadaka.png'
import legs from '../images/legs.png'
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Appointment from '../components/Appointment';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Counts from '../components/Counts';
import Departement from '../components/Departement';
import Doctors from '../components/Doctors';
import Services from '../components/Services';
import Post from '../components/Post';
const Home = () => {
    window.localStorage.setItem('user', JSON.stringify(
        {
            "id": 1,
            "firstname": "Oussama",
            "lastname": "Aarab",
            "phoneNumber": "0624085197",
            "longitude": 6.3755290673898965E7,
            "latitude": -4.356204952808507E7,
            "email": "oussama_aarab@um5.ac.ma",
            "password": "$2a$10$4f3fZWXHkRLybyg61e4D..7xMH9xg6jX21P0t3I/UiGm/MSejjpMC",
            "roles": [
                "USER"
            ],
            "accountNonExpired": true,
            "accountNonLocked": true,
            "credentialsNonExpired": true,
            "authorities": [
                {
                    "authority": "USER"
                }
            ],
            "username": "oussama_aarab@um5.ac.ma",
            "enabled": true
        }
    ));
    return (
        <>
            <br /><br />
            <center><img src={sadaka} alt="Sadaka" /></center>
            <center><img src={legs} alt="Sadaka" /></center>
            <center>
                <iframe width="860" height="415" src="https://www.youtube.com/embed/pwej2j_35mo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
            </center>
        </>
    );
}

export default Home;