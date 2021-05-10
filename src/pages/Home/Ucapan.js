import React from 'react'
import Slider from "react-slick";
import pic1 from '../../assets/images/ucapan_3.png'
import pic2 from '../../assets/images/ucapan_2.png'
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
  const Ucapan = () => {
    // const ref = useRef(null);      
    // console.log(width)  

    const settings = {
      className: "center",
      dots: true,      
      infinite: true,      
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,     
      adaptiveHeight: true,   
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };  
    const people = [ 
        {
            url: pic1,
            name: 'Afuza Imam Awed Alfaruq',
            pesan: 'Untuk Suami, Percayalah, ketika engkau memuliakan istrimu, maka sejak saat itu kebahagiaan akan selalu menghampirimu... Untuk Istri, Suami tidak akan pernah berhenti untuk memikirkan pasangannya (istri). Percayalah, dia selalu memikirkan dan memberikan yang terbaik untuk dirimu...'
        },
        {
            url: pic2,
            name: 'Anddy Marrusliansyah',
            pesan: 'Kami tidak bisa memberikan sesuatu yang terbaik untuk dirimu, teman sekaligus keluarga untukmu. Setelah sekian lama akhirnya dirimu menemukan tambatan hati yang terakhir, kami akan selalu berdoa semoga hal terbaik menyertai u dan mampu mengarungi bahtera keluarga yang baru'
        },
    ] 
    return (
        <div className="ucapan-container" id="gal-wed" data-aos="fade-up">            
          <h1 className="title">Dari Sahabat</h1>            
          {/* <div ref={ref} style={{width: '100%'}}>Hello</div> */}
          <div className="carousel" style={{width: '80%'}} data-aos="fade-up">
            <Slider {...settings} >
              {
                people.map(person => (
                  <div >
                      <div className="carousel-img">
                          <img src={person.url} alt="" />
                        <h3>{person.name}</h3>
                        <p>"{person.pesan}"</p>
                      </div>
                  </div>   

                ))
              }
                                
            </Slider>
          </div>          
        </div>
    )
}

export default Ucapan