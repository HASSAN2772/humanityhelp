import React from 'react'
import './Slider.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function
  () {
  return (
    <div>
      <div className='main-slider'>
        <OwlCarousel items={1}
          className="owl-theme"
          loop={true}
          // nav={true}
          autoPlay
          autoplayTimeout={2000}
          autoplayHoverPause={true}

          margin={0} >
          <div >
            <img className="img" id='banner-Img' src={'assets/sliderimgs/Bnr3.jpg'} />
            <div className='bnr-Img1' >
              <p className='bnr-Img1Para'>
                GIVE A <span className='bnr-Img1Paraspan'>HELPING HAND</span> TO THOSE WHO NEED IT!
              </p>
              <p className='bnr-Img1Para2'>Volunteers do not Necessarily have the Time, They Just have the Heart.</p>
              <button className='bnr1-Btn'>Donate Now</button>
            </div>
          </div>

          <div>
            <img className="img" src={'assets/sliderimgs/Bnr2.png'} />
            <div className='bnr-Img2' >
              <p className='bnr-Img2Para'>
                Save The Children
              </p>
              <p className='bnr-Img2Para2'>CHILDREN AND POOR PEOPLE ARE AT HIGH RISK OF SEVERE MALNUTRITION & NO EDUCATION.</p>
              <button className='bnr1-Btn'>Donate Now</button>
            </div>
          </div>

          <div><img className="img" src={'assets/sliderimgs/img6.jpg'} /></div>
          <div><img className="img" src={'assets/sliderimgs/bnr2.jpg'} /></div>
        </OwlCarousel>
      </div>
    </div>
  )
}
