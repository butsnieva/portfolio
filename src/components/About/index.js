import React from 'react';
import './style.css';
import Header from '../../components/Header';
import profilePic from '../../assets/images/me.JPG';


function AboutSection() {
  return (
    <div className='uk-container'>
      <div className='uk-text-center'>
        <div id='about-me-container'>
          <div id='about-me'>
            <Header title='About Me' />
            <p className='uk-text-justify about-me-desc'>
              Hello! My name is Kateryna and I enjoy creating things that live
              on the internet! My interest in web development started back in
              2006 when my middle school has purchased computers and we started
              to dive into the IT world, spending 7 hours/week learning and
              coding! (Pascal, anyone? :D)
              <br />
              Through my studies, I've gained a solid understanding of computer
              science and web development concepts, and have dedicated my free
              time to apply these concepts to real-world scenarios and
              applications.
              <br />
              <br />
              The hands-on programming experience using the most demanded
              languages and frameworks, paired with background in testing gives
              me the opportunity to apply the best practices in Web development
              to deliver a clean and efficient codebase.
            </p>
            <img src={profilePic} alt='Me' id='me-pic' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
