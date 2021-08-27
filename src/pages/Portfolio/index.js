import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import PortfolioCard from '../../components/PortfolioCard';

function PortfolioPage() {
  return (
    <div className='portfolio-pic-section'>
      <Navbar />
      <div class='uk-container portfolio-container' id='portfolio'>
        <Header padding={50} title='Portfolio' />
        <div
          class='uk-child-width-1-2@m uk-grid-match'
          uk-grid='true'
          id='portfolio-section'
          uk-scrollspy='cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: true'
        >
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
