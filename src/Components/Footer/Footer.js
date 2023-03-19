import React from 'react'
import "./footer.css"

const Footer = ({hero}) => {
  return (
    <div className='FullFooter'>
        <footer className='Footer'>
            <div className='FooterNavItemBox'>
                <h1 className='FooterName'>{hero.name}</h1>
            </div>
            <div className='FooterNavItemBoxB'>
                <h3 className='FooterEmail'>{hero.email}</h3>
            </div>
            <nav className='FooterNavItemBox'>
                <a className='FooterNavItem' target={'_blank'} rel="noreferrer" href="https://github.com/ang1993">Github</a>
                <a className='FooterNavItem' target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/in/angarcaz/">Linkedin</a>
            </nav>
        </footer>
    </div>
  )
}

export default Footer