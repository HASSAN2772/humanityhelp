import React, { useState } from 'react'
import './Gallery.css'
import Navbar from './Navbar'
import Footer from './Footer'
import GalData from "./GalleryData"
export default function Gallery() {

    const [data,setData] = useState(GalData)
    const Alldata =()=>
    {
    const allImagesData = GalData.filter((value)=>
    {
        return value;
    });

    setData(allImagesData);
    }

const ForCategory = (type) =>
{
    const typedata = GalData.filter((value)=>{
        return value.category === type
    })
    setData(typedata);
}
return (
    <div>
        <Navbar/>
        <div className='main-Gallery'>
            <div className='Gallery-Container'>
                
          
            <h1>Welcome to Our Gallery</h1>
            <div className='searchingBtnsGallery'>
            <button onClick={Alldata}>All Pictures</button>
            <button onClick={()=>ForCategory("poor childs")}>Poor Childs</button>
            <button onClick={()=>ForCategory("homeless")}>Homeless </button>
            <button onClick={()=>ForCategory("education")}>For Education</button>
            </div>
          <div className='Gallery-Images'>
        
            {
                data.map((elem)=>{
                const {id,image,category,name} = elem;
                return(
                    <>
                     <div className='main-images'>
                    <div className='images'>
                    <img id='GalleryImgs' src={image} alt='image not '/>
                    </div>
                    <div className='imagesOverlay'>
                        <img src='/assets/sliderimgs/Logo half.png' alt='log'/>

                    </div>
                   </div>
                    
                    </>
                    )})
            } 
          </div>
           
           
            </div> 
            </div> 
           
   <Footer/>
    </div>
    
)
}
