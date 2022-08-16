import React from 'react'
import './Gallery.css'
import Navbar from './Navbar'
import Footer from './Footer'
import {MenuItem,FormControl,InputLabel,Select,Button} from '@mui/material'
export default function Gallery() {
    return (
        <div>
            <Navbar />
            <div className='main-Gallery'>
                <h1>Welcome to Our Gallery</h1>
                <div className='gallery-imgs'>
                    <div className='gallery-row-1'>
                        <div className='galleryRow-1-imgs'>
                            img 1
                        </div>
                        <div className='galleryRow-1-imgs'>
                            img 1
                        </div>
                        <div className='galleryRow-1-imgs'>
                            img 1
                        </div>
                        <div className='galleryRow-1-imgs'>
                            img 1
                        </div>
                    </div>
                    <div className='gallery-row-2'>
                        <div className='galleryRow-2-imgs'>
                            img 2
                        </div>
                        <div className='galleryRow-2-imgs'>
                            img 2
                        </div>
                        <div className='galleryRow-2-imgs'>
                            img 2
                        </div>
                    </div>
                    <div className='gallery-row-3'>
                        <div className='galleryRow-3-imgs'>
                            img 3
                        </div>
                        <div className='galleryRow-3-imgs'>
                            img 3
                        </div>

                    </div>
                    <div className='gallerybackimg'>
                        <div className='galleryBackDetails'>
                            <h1>Serve Humanity </h1>
                            <select className='gallerySelectOpt'>
                            <option className='galleryOptions'>Request Blood </option>
                            <option className='galleryOptions'>Donate Now </option>
                            </select>
                           <button className='galleryRequestBtn'>
                            Request Blood
                           </button>
                           <button className='galleryDonatetBtn'>
                            Donate Now
                           </button>


                        </div>
                    </div>
                    <div className='gallery-row-4'>
                        <div className='galleryRow-4-imgs'>
                            row-4
                        </div>
                        <div className='galleryRow-4-imgs'>
                            row-4
                        </div>
                        <div className='galleryRow-4-imgs'>
                            row-4
                        </div>
                        <div className='galleryRow-4-imgs'>
                            row-4
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
