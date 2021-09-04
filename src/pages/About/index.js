import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import HomeHeader from '../../components/HomeHeader';
import AboutSection from '../../components/About';
import bottomPic from '../../assets/images/background/bottom.png';

function AboutPage() {
  return (
    <div id='pic-section' uk-parallax='bgy: -150'>
      <Navbar />
      <HomeHeader />
      <AboutSection />
      <img id='bottom-about'  src={bottomPic} />
    </div>
  );
}

export default AboutPage;
