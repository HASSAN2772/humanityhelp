import React from 'react'
import './applicants.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer'
// import Nav from './Nav'
export default function Applicants() {
    return (

        <div>
            <div className='ma'>
                <div className='directFunds'>
                    <div className='Status'>
                        <div className='searchStatus'>
                            <input className='searchBar' type="search"
                                placeholder='Enter Your CNIC - without dashes '></input>
                            <FontAwesomeIcon icon={faMagnifyingGlass} type="button" size="2x" color='white' className='searchIcon' />
                        </div>
                    </div>
                    <div className='searchData'>
                        searh
                    </div>
                    <div className='h1-afterSearch'>
                        <h1>Something More</h1>
                    </div>
                    <div className='funds-Main'>
                        <div className='directFund-Img'>
                            <img src='/assets/sliderimgs/Applicant-fund-details-pic.jpg' alt='ImgTg' />
                        </div>
                        <div className='directFund-Funds'>
                            <div className='funds-Details'>
                                <h1>Our Directs Funds</h1>
                                <p>We offer many different funds that provide direct help for specific issues that people face in the world. </p>
                                <div className='funds-List'>
                                    <div className='funds-name'>Flood Funds For Pakistan</div>
                                    <div className='funds-btn'>Donate </div>
                                </div><div className='funds-List'>
                                    <div className='funds-name'>Covid-19 Funds</div>
                                    <div className='funds-btn'>Donate </div>
                                </div><div className='funds-List'>
                                    <div className='funds-name'>Dams Funds </div>
                                    <div className='funds-btn'>Donate </div>
                                </div><div className='funds-List'>
                                    <div className='funds-name'>For School & Health</div>
                                    <div className='funds-btn'>Donate </div>
                                </div><div className='funds-List'>
                                    <div className='funds-name'>For Homeless </div>
                                    <div className='funds-btn'>Donate </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='comImgs'>
                        <div className='comImg-p'>
                            <p id='comImg-p-p1'>  ! اب اپنا پہلا قدم اٹھاؤ</p>
                            <p id='comImg-p-p2'>Remember that the happiest people are not those getting more, but those giving more۔</p>
                            <p id='comImg-p-p3'>  "Help others without any reason and give without the expectation of receiving anything in return۔"		</p>

                        </div>
                        <div className='comImg-img'>
                            <div className='comImgDiv'>
                                <img src='/assets/sliderimgs/Applicant-urdu-pic.jpg' alt='urduComPic' />
                            </div>
                            <div className='comUrduImgBtn-overlay'>
                                <div className='overlay-det'>
                                    <h1>! اب اپنا پہلا قدم اٹھاؤ</h1>
                                    <HashLink to={'/main#donate-Sec'}> <button> آج ہی مدد کریں </button></HashLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}
