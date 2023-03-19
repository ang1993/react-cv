import React from 'react';
import "./skills.css"

const skills = ({skills}) => {
  return (
    <div className='Skills'>
      <ul className='SkillBox'>
      {skills.map((skill) => {
        return (
              <li className='SkillItem' key={JSON.stringify(skill)}>
                <img className='SkillImg' src={skill.image} alt={skill.name} />
                <p className='SkillName'>{skill.name}</p>
              </li>
        )
      })}
      </ul>
      </div>
  )
}


export default skills
