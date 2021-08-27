import React from 'react';
import './style.css';

function PortfolioCard() {
  return (
    <div>
      <div className='uk-card uk-card-default portfolio-card'>
        <div className='uk-card-body portfolio-card-body'>
          <div
            className='uk-position-relative uk-visible-toggle uk-light'
            tabindex='-1'
            uk-slideshow='true'
          >
            <ul className='uk-slideshow-items'>
              <li>
                <h3 className='uk-card-title project-title'>Title</h3>
                <p className='project-description'>About</p>
              </li>
              <li>
                <img src='${card.imgURL}' alt='' uk-cover='true' />
              </li>
            </ul>
            <a
              className='uk-position-top-right uk-position-small uk-hidden-hover'
              href='#'
              uk-slidenav-next
              uk-slideshow-item='next'
            ></a>
          </div>
        </div>
        <div className='uk-card-footer portfolio-card-footer'>
          <div className='uk-text-center'>
            <a href='${card.siteURL}' target='_blank' className='btn-link'>
              <button className='uk-button uk-button-default portfolio-btn'>
                View Website
              </button>
            </a>
            <a href='${card.repoURL}' target='_blank' className='btn-link'>
              <button className='uk-button uk-button-default portfolio-btn'>
                GitHub Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
