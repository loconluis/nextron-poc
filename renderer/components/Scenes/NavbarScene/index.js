import React from 'react';
const shell = require('electron').shell;

export default function Navbar() {
  const handleClick = (URI) => {
    shell.openExternal(URI);
  }

  return (
    <div className="row">
      <div className="col-md-12 text-right">
        <a style={{ marginRight: '15px', color: '#ff0080'}} onClick={handleClick("https://github.com/loconluis")} target="_blank">Github</a>
        <a style={{ marginRight: '15px'}} href="https://twitter.com/LoconLuis" target="_blank">Twitter</a>
        <a href="https://luislocon.dev/" target="_blank">Website</a>
      </div>
    </div>
  );
}
