import React from 'react';

import { useSelector } from 'react-redux';

import HeroSection from '../../components/HeroSection/HeroSection';
import MissionSection from '../../components/MissionSection/MissionSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import CaseSection from '../../components/CaseSection/CaseSection';
import CounterSection from '../../components/CounterSection/CounterSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import WorldSection from '../../components/WorldSection/WorldSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {

    const { cases, isFetching: fetchingCases } = useSelector(state => state.cases);
    const { blogs, isFetching: fetchingBlogs } = useSelector(state => state.blogs);

    if (fetchingCases || fetchingBlogs) {
        return <Loading />
    }

    return (
        <>
            <Header />
            <div className='page home__page'>
                <HeroSection />
                <MissionSection />
                <AboutSection />
                {cases.length > 0 && <CaseSection />}
                <CounterSection />
                <TeamSection />
                <WorldSection />
                {blogs.length > 0 && <BlogSection />}

            </div>
            <Footer />
        </>
    );
};

export default Home;