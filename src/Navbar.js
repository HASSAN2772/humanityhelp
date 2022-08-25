import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <header>
                <div className='m-header'>
                    <div className='header-container'>
                        <nav className='header-nav'>
                            <ul className='header-ul'>
                                <li><Link><FontAwesomeIcon icon={faFacebookSquare} size="xl" /></Link></li>
                                <li><Link><FontAwesomeIcon icon={faWhatsapp} size="xl" /></Link></li>
                                <li><Link><FontAwesomeIcon icon={faTwitter} size="xl" /></Link></li>
                                <li><Link><FontAwesomeIcon icon={faInstagram} size="xl" /></Link></li>
                            </ul>
                            <div className='header-btn'>
                                <Link><button className='h-loginbtn'>Login</button></Link>
                                <button className='h-registerbtn'>Register</button>
                            </div>
                        </nav>
                        <div className='headerlogo'>
                            <div className='logoimg-div'>
                                <img src='/assets/sliderimgs/Logo 2.png' style={{width:"250px" ,height:"130px"}} />
                            </div>
                            <ul className='ul-menu'>
                                <li><Link to="/signup" id='menu-ul-Link' >Home</Link></li>
                                <li><Link id='menu-ul-Link' >Gallery</Link></li>
                                <li><Link id='menu-ul-Link' >Causes</Link></li>
                                <li><Link id='menu-ul-Link' >Contact Us</Link></li>
                                <li><Link to={"/testing"} id='menu-ul-Link' >Sameer</Link></li>
                                
                            </ul>
                            <button className='h-donatebtn'>Donate Now</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
