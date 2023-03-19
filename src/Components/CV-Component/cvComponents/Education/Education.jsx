import React from 'react'
import "./education.css"

const education = ({ education }) => {
  return (
    <ul className='Education'>
      {education.map((info) => {
        return (
          <li class="EducationItem" key={JSON.stringify(info)}>
            <h3 className="Title01">{info.title}</h3>
            <p className="Place">{info.institution}</p>
            <p className="When">{info.date}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default education