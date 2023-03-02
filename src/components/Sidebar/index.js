import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../Assets/Images/logo-s.png'
import LogoSubtitle from '../../Assets/Images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Sidebar = () => {
    const [click, setClick] = React.useState(false)

  const handleClick = () => setClick(!click)
  const Close = () => setClick(false)

  return (
    <div className='nav-bar'>
        <Link className='logo' to='/' onClick={handleClick}>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="sayantan" />
        </Link>
        <nav className={click ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active"  aria-activedescendant="active" to="/"   onClick={handleClick}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link"  aria-activedescendant="active" to="/about"   onClick={handleClick}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link"  aria-activedescendant="active" to="/contact"   onClick={handleClick}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sayantan-mondal-7426b6216/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/@sayantanmondal7035/playlists'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.facebook.com/sayantan.mondal.1884'>
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Sayantan0007'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
        // onClick={() => setShowNav(true)}
        onClick={handleClick}
        icon={faBars}
        color="#fff"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar