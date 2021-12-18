import React from 'react';

// Components
import PageBanner from '../../components/PageBanner/PageBanner';
import MissionSection from '../../components/MissionSection/MissionSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <>
            <Header />
            <PageBanner
                title="About Us"
                bannerBg="https://images.pexels.com/photos/6994985/pexels-photo-6994985.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb="About"
            />
            <MissionSection />
            <AboutSection />
            <Footer />
        </>
    );
};

export default About;