import React from 'react';
import './style.css';

function Header(props) {
  return (
    <div class='uk-text-center'>
      <h1 class='page-heading' style={{ paddingTop: props.padding }}>
        {props.title}
      </h1>
      <hr />
    </div>
  );
}

export default Header;
