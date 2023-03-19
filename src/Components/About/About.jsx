import React from 'react'
import "./about.css";

const about = ({ hero }) => {
  return (
    <div className='About'>
      <div className='AboutLeftColumn'>
        <img className='AboutImg' src={hero.image} alt="cvimg"></img>
        <p className='HighlighText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem felis, fringilla a diam nec. </p>
      </div>  
      <div className='AboutRightColumn'>
        <h2 id='AboutTitle'>About</h2>
        <p>{hero.about}</p>
      </div>
    </div>
  )
}

export default about