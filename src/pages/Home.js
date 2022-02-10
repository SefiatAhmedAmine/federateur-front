import React from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Appointment from '../components/Appointment';
const Home = () => {
    return (
        <>
            {/* <!-- ======= Top Bar =======--> */}
            <div id="topbar" className="d-flex align-items-center fixed-top">

                

                <main id="main">
                    <Hero/>
                    <WhyUs/>
                    <Appointment/>
                </main>
                {/* <!--End #main--> */}

            </div>
        </>
    );
}

export default Home;