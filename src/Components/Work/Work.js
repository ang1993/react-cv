import React from 'react';
import "./work.css"

const Work = ({work}) => {
  return (
    <div className='FullWork' id="Work">
        <div className='Work'>
            <h2 id='WorkTitle'>Some work</h2>
            <p>{work.description}</p>
            <div className='SelectedWorksContainer'>
            {work.selectedworks.map((onework) => {
                return (
                    <div className='SelectedWorkItem' key={JSON.stringify(onework)}>
                        <img className='WorkImage' src={onework.image} alt={onework.title}></img>
                        <h4 className='WorkTitle'>{onework.title}</h4>
                        <p className='WorkDescription'>{onework.description}</p>
                    </div>
                )
            })}
            </div>
        </div>

    </div>
  )
}

export default Work
