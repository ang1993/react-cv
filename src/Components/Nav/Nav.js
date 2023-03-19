import React from 'react';
import "./nav.css";

const nav = ({ hero }) => {
  return (
    <nav className='Nav'>
        <div className='FlexNavItem'>
            <h1 className='HeroName'>{hero.name}</h1>
        </div>
        <div className='FlexNavItemB'>
            <h3 className='HeroSubtitle'>{hero.subtitle1}</h3>
            <h3 className='HeroSubtitle'>{hero.subtitle2}</h3>
        </div>
        <div className='FlexNavItem'>
            <a className='NavItem' href="#Work">Work</a>
            <a className='NavItem' href="#Cv">CV</a>
            <a className='NavItem' href="#Contact">Contact</a>
        </div>
    </nav>
  )
}

export default nav