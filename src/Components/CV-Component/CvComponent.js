import React, { useState } from 'react'
import Education from './cvComponents/Education/Education'
import Experience from './cvComponents/Experience/Experience'
import Skills from './cvComponents/Skills/Skills'
import "./cvcomponent.css"

const CvComponent = ({education, experience, skills}) => {

    const [showComponents, setShowComponents] = useState("education")

  return (
    <div className='FullCvComponent' id="Cv">
    <div className='CvComponent'>
            <h2 id="CvTitle">How did I get here?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem felis, fringilla a diam nec, molestie pretium arcu. Maecenas tempor dictum nisl, dictum fringilla diam lobortis vestibulum. Vivamus a elit facilisis, aliquet est ac, rutrum nulla. Nunc magna nunc, sollicitudin id rhoncus sit amet, vestibulum eget erat. </p>
        <div className='OtherComponents'>
            <div className='ButtonContainer'>
                <button className="btn" onClick={()=> setShowComponents("education")}>Education</button>
                <button className="btn" onClick={()=> setShowComponents("experience")}>Experience</button>
                <button className="btn" onClick={()=> setShowComponents("skills")}>Skills</button>
            </div>
            {showComponents === "education" ?
            (<Education education = { education } />) :
            showComponents === "experience" ?
            (<Experience experience = { experience } />) :
            showComponents === "skills" ?
            (<Skills skills = { skills } />) :
            (<Education education = { education } />)}
        </div>
    </div>
    </div>
  )
}

export default CvComponent