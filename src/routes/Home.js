import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import homepage1 from '../Component/homepage1.jpg';
import AboutCompany from '../Component/AboutCompany'
import ClientReviews from '../Component/ClientReviews';
import Footer from '../Component/Footer';
import ContactUs from '../Component/ContactUs';
import ScheduleMeeting from '../Component/ScheduleMeeting';
import About from '../Component/About';



function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={homepage1}
                title="Guiding Your Path to Excellence"
                text="Unlock Success with Expert Guidance."
                buttonText="Schedule a Meeting"
                url="/schedule-meeting"
                btnClass="show"
            />
            <ClientReviews/>
            <About/>
            <AboutCompany/>
            <ScheduleMeeting/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home