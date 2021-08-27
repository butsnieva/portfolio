import React from 'react';
import './style.css';

function ContactCanvas() {
  return (
    <div id='contact-canvas' uk-offcanvas='overlay: true'>
      <div className='uk-offcanvas-bar'>
        <button
          className='uk-offcanvas-close'
          type='button'
          uk-close='true'
        ></button>
        <h3 id='contact-title'>Contact Me</h3>
        <ul className='uk-list'>
          <li>
            <a
              uk-icon='icon: mail'
              className='contact-icon contact-link-icon'
              href='mailto:butsnieva@gmail.com'
            ></a>
            <a
              className='contact-link contact-li uk-text-middle'
              href='mailto:butsnieva@gmail.com'
            >
              butsnieva@gmail.com
            </a>
          </li>
          <li>
            <span className='contact-icon' uk-icon='icon: receiver'></span>
            <span className='contact-li uk-text-middle'>(512) 888-4419</span>
          </li>
          <li>
            <span uk-icon='icon: home' className='contact-icon'></span>
            <span className='contact-li uk-text-bottom'>Austin, TX</span>
          </li>
          <li>
            <a
              uk-icon='icon: github'
              href='https://github.com/butsnieva'
              className='contact-icon contact-link-icon'
              target='_blank'
            ></a>
            <a
              className='contact-link contact-li uk-text-middle'
              href='https://github.com/butsnieva'
              target='_blank'
            >
              butsnieva
            </a>
          </li>
          <li>
            <a
              uk-icon='icon: linkedin'
              href='https://www.linkedin.com/in/butsnieva/'
              className='contact-icon contact-link-icon'
              target='_blank'
            ></a>
            <a
              className='contact-link contact-li uk-text-bottom'
              href='https://www.linkedin.com/in/butsnieva/'
              target='_blank'
            >
              Kateryna Butsnieva
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactCanvas;
