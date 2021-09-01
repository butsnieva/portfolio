import React from 'react';
import './style.css';
import Header from '../../components/Header';
import profilePic from '../../assets/images/IMG_1525.jpg';


function AboutSection() {
  return (
    <div className='uk-container'>
      <div className='uk-text-center'>
        <div id='about-me-container'>
          <div id='about-me'>
            <Header title='About Me' />
            <p className='uk-text-justify about-me-desc'>
              Hi! I'm Kateryna, I'm a full-stack web developer.
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur cursus massa et purus feugiat faucibus.
              Nullam at justo ac est interdum sodales nec nec metus. Praesent
              vitae elementum augue. Aliquam nec placerat enim. Aenean molestie,
              dui et mattis volutpat, nisi elit varius leo, id rhoncus lorem
              eros vel velit. Nunc accumsan porttitor risus. Nam ut lobortis
              justo, sit amet congue urna.
              <br />
              <br />
              Duis aliquet, turpis nec sodales posuere, arcu augue iaculis ex,
              et congue urna dolor nec risus. Morbi turpis libero, mattis vel
              vehicula sed, finibus et dolor. Phasellus tincidunt nisi quis
              eleifend molestie. In tristique nulla quis lacinia fermentum.
              Quisque non laoreet neque. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Vivamus
              pulvinar nisi a lacinia faucibus. Nullam commodo tincidunt
              venenatis. Donec at justo leo.
            </p>
            <img src={profilePic} style={{ width: 125 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
