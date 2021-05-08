import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import mempelai from '../../assets/images/mempelai.jpg'
import pria from '../../assets/images/mempelai_pria.jpg'
import wanita from '../../assets/images/mempelai_wanita.jpg'
import arrBack from "../../assets/images/Slider/ArrowBack.png";
import arrNext from "../../assets/images/Slider/ArrowNext.png";

function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-next"
        onClick={onClick}
      >
          <img src={arrNext} alt="" />
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-back"        
        onClick={onClick}
      >
          <img src={arrBack} alt="" />
      </div>
    );
  }
  const Dokumentasi = () => {
    // const ref = useRef(null);    
    const getWidth = () => window.innerWidth 
      || document.documentElement.clientWidth 
      || document.body.clientWidth;
    let [width, setWidth] = useState(getWidth());    
    
    useEffect(() => {
      const resizeListener = () => {
        // change width from the state object
        setWidth(getWidth())
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);                   
      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, [])   
    // console.log(width)  

    const settings = {
      className: "center",
      dots: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: width < 1000? 1:3,
      slidesToScroll: 1,     
      adaptiveHeight: true,   
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };    
    return (
        <div className="dokumentasi-container">            
          <h1 className="title" data-aos="fade-up">Photos Gallery</h1>            
          {/* <div ref={ref} style={{width: '100%'}}>Hello</div> */}
          <div className="carousel" style={{width: '80%'}} data-aos="fade-up">
            <Slider {...settings} >
                <div >
                    <div className="carousel-img">
                        <img src={mempelai} alt="" />
                    </div>
                </div>   
                <div>
                    <div className="carousel-img">
                        <img src={pria} alt="" />
                    </div>                                 
                </div>             
                <div>
                    <div className="carousel-img">
                        <img src={wanita} alt="" />
                    </div>                
                </div>                
                <div>
                    <div className="carousel-img">
                        <img src={wanita} alt="" />
                    </div>                
                </div>                
            </Slider>
          </div>
          <h1 className="title" data-aos="fade-up">Video Pre-Wedding</h1>
          <div className="video" data-aos="fade-up">
              <div className="video-wrapper">                
                  <iframe
                          src="https://www.youtube.com/embed/eru_H6-7CSw"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title="video"
                          width="560"
                          height="315"
                  />

              </div>
              
          </div>

        </div>
    )
}

export default Dokumentasi
