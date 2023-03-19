import React from 'react';
import "./experience.css"

const experience = ({ experience }) => {
  return (
    <ul className='Experience'>
      {experience.map((info) => {
        return (
          <li className="ExperienceItem" key={JSON.stringify(info)}>
            <h3 className="Title01">{info.title}</h3>
            <p className="Place">{info.where} - <span className="Where">{info.city}</span></p>
            <p className="When">{info.date}</p>
            <ul className='TaskUl'>
            {info.tasks.map((task) =>{return (<li className='TaskItem'>— {task}</li>)})}
            </ul>
          </li> 
        )
      })}
    </ul>
  )
}

export default experience


