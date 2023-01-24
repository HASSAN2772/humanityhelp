import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Applicants from './Applicants';
import './Nav.css';

export default function Nav() {
    return (
        <div>
            <div className='header-div'>
                <div className='header-con'>
                    <ul className='header-social-ul'>
                        <li><Link id='header-ul-Link'><FontAwesomeIcon icon={faFacebookSquare} /></Link></li>
                        <li><Link id='header-ul-Link'><FontAwesomeIcon icon={faWhatsapp} /></Link></li>
                        <li><Link id='header-ul-Link'><FontAwesomeIcon icon={faTwitter} /></Link></li>
                        <li><Link id='header-ul-Link'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                    </ul>
                </div>
                <div className='header-main'>
                    <div className='header-main-con'>
                        <div className='logoNav'>
                            <img src='/assets/sliderimgs/Logo.png' alt='img' />
                        </div>
                        <ul className='header-menu'>
                            <li><Link id='header-menu-Link' to={"/"}>Home</Link></li>
                            <li><Link id='header-menu-Link' to={"gallery"}>Gallery</Link></li>
                            <li><Link className='Applicanthighlight' to={"applicants"}>Applicants</Link></li>
                            <li><Link id='header-menu-Link' to={"contact"}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Applicants />
        </div>
    )
}
