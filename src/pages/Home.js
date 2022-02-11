import React from 'react';
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
            "firstname": "commodo",
            "lastname": "laborum",
            "phoneNumber": "+212673904066",
            "longitude": -7.860166348697782E7,
            "latitude": -7.846050072630888E7,
            "email": "sdelaboudi@gmail.com",
            "password": "hello",
            "roles": [
                "ADMIN"
            ]
        }
    ));
    return (
        <>
            <h2>Bonjour</h2>
        </>
    );
}

export default Home;