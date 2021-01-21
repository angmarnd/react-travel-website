import React from 'react';
import '../../App.css';
import Card from '../CardItem/Card/Card';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer'
function Home() {
    return (
        <>
            <HeroSection />
            <Card />
            <Footer />
        </>
    );
}

export default Home;
