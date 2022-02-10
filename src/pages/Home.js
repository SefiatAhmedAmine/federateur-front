import React from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Appointment from '../components/Appointment';
import Header from '../components/Header';
const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <WhyUs />
            <Appointment />
        </>
    );
}

export default Home;