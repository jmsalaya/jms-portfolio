import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo1 from '../../assets/images/21.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome,faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'


function Sidebar(){
    return(
       <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={logo1} alt='logo'/>
            </Link>

            <nav>
                <NavLink exact='true' activeClassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' activeClassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact='true' activeClassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/john-mark-salaya-50727b236/'>
                        <FontAwesomeIcon  icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/jmsalaya'>
                        <FontAwesomeIcon  icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://x.com/Salt00111000'>
                        <FontAwesomeIcon  icon={faXTwitter} color='#4d4d4e'/>
                    </a>
                </li>
                
            </ul>
       </div>
    )
}

export default Sidebar