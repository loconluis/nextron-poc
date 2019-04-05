import React from 'react';
import { shell } from 'electron';
import './navbar.css';

export default function Navbar() {
  const handleClick = URI => {
    console.log('shell', shell);
    shell.openExternal(URI);
  };

  return (
    <div className="row navbar-position">
      <div className="col-md-12 text-right">
        <a
          className="anchor-navbar"
          onClick={() => handleClick('https://github.com/loconluis')}
          target="_blank"
        >
          Github
        </a>
        <a
          className="anchor-navbar"
          onClick={() => handleClick('https://twitter.com/LoconLuis')}
          target="_blank"
        >
          Twitter
        </a>
        <a
          className="anchor-navbar"
          onClick={() => handleClick('https://luislocon.dev/')}
          target="_blank"
        >
          Website
        </a>
      </div>
    </div>
  );
}
