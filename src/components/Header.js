import React from 'react';
import AppContext from 'components/AppContext';
import './styles/Header.scss';

export default function Header(props) {
  const ctx = React.useContext(AppContext);

  return (
    <header id="main-header">
      <h1 className="shine">yeetmeister <sup>5000</sup></h1>

      <div id="theme-select">
        {ctx.themes.map(theme => 
          <button type="button" id={`icon-theme-${theme}`} className="icon icon-theme" 
            onClick={() => ctx.setTheme(theme)}>{theme}</button>)}
      </div>
    </header>
  );
}