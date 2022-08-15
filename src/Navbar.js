import React from 'react';
import './Navbar.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function Navbar() {
    return (
        <div>
            <header>
                <div className='m-header'>
                    <div className='header-container'>
                        <nav className='header-nav'>
                            <ul className='header-ul'>
                                <li><a><FontAwesomeIcon icon={faFacebookSquare} size="xl" /></a></li>
                                <li><a><FontAwesomeIcon icon={faWhatsapp} size="xl" /></a></li>
                                <li><a><FontAwesomeIcon icon={faTwitter} size="xl" /></a></li>
                                <li><a><FontAwesomeIcon icon={faInstagram} size="xl" /></a></li>

                            </ul>
                            <div className='header-btn'>
                                <button className='h-loginbtn'>Login</button>
                                <button className='h-registerbtn'>Register</button>
                            </div>


                        </nav>
                        <div className='headerlogo'>
                            <div className='logoimg-div'>
                                <img src="/assets/sliderimgs/logo.png" />
                            </div>
                            <ul className='ul-menu'>
                                <li><a>Home</a></li>
                                <li><a>Gallery</a></li>
                                <li><a>Causes</a></li>
                                <li><a>Contact Us   </a></li>
                            </ul>
                            <button className='h-donatebtn'>Donate Now</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}
