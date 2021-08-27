import React from 'react';
import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className='uk-text-center uk-text-middle footer'>
        <span> © Kateryna Butsnieva</span> <br />
        <a
          uk-icon='icon: github'
          href='https://github.com/butsnieva'
          className='contact-icon contact-link-icon'
          target='_blank'
        ></a>
        <a
          uk-icon='icon: mail'
          className='contact-icon contact-link-icon'
          href='mailto:butsnieva@gmail.com'
        ></a>
        <a
          uk-icon='icon: linkedin'
          href='https://www.linkedin.com/in/butsnieva/'
          target='_blank'
          className='contact-icon contact-link-icon'
        ></a>
      </footer>
    );
  }
}

export default Footer;
