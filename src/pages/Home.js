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
    return (
        <>
        <main className="main">
            <Departement />
            {/* <Header />
            <Hero />
            <WhyUs />
        <Appointment /> */}
            {/* <Counts/>
            <Contact/>
            <Services/>
            <Post/>
            <Doctors/> */}
        </main>
        </>
    );
}

export default Home;