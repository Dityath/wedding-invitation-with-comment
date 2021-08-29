import React from 'react'
import Slider from "react-slick";
import pic1 from '../../assets/images/ucapan_1.png'
import pic2 from '../../assets/images/ucapan_2.png'
import pic3 from '../../assets/images/ucapan_3.png'
import pic4 from '../../assets/images/ucapan_4.png'
import pic5 from '../../assets/images/ucapan_5.png'
import pic6 from '../../assets/images/ucapan_6.png'
import pic7 from '../../assets/images/ucapan_7.png'
import pic8 from '../../assets/images/ucapan_8.png'
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
      autoplay: true,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,     
      adaptiveHeight: true,   
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };  
    const people = [ 
        {
            url: pic1,
            name: 'Kirana Kinantan Kinasih',
            pesan: 'Selamat menempuh hidup baru sahabatku, semoga Allah swt senantiasa menyempurnakan kebahagiaan kalian, dan menjadikan pernikahan kalian sebagai ibadah kepada Nya 😇🤍'
        },
        {
            url: pic2,
            name: 'Muhammad Rosul',
            pesan: "Lelah itu biasa, kecewa itu wajar. Namun, percayalah dalam pernikahan bukan tentang seberapa kali engkau lelah dan kecewa, melainkan tentang seberapa lama dan kuat engkau bertahan (fiddiniwaddun'ya) 😉"
        },
        {
            url: pic3,
            name: 'Irda Andini',
            pesan: 'Jadilah yang mencintai dan bukan hanya untuk dicintai karena pernikahan hanya bersama orang yang mencintai bukan dicintai." semawa selamat menempuh hidup baru happy wheeding'
        },
        {
            url: pic4,
            name: 'Lia Agustin',
            pesan: 'Akhirnya, selamat menikah sahabatku. Melihat perjuanganmu untuk move on dari pengalaman kasih yang penuh duka, aku turut berbahagia ketika mendengar kabar kamu menemukan pasangan terbaikmu. Semoga kisah cintamu dan dia berlangsung abad'
        },
        {
            url: pic5,
            name: 'Indah permata sari',
            pesan: "Selama menempuh hidup baru manusia bucinnnkuu, semoga ini menjadi pelabuhan cinta terakhirmu  dan selalu bersama dalam keadaan apapun."
        },
        {
            url: pic6,
            name: 'Fatmawati',
            pesan: "Sejatinya pernikahan adalah lembaran baru kehidupan, kebahagiaan, kebersamaan, dan hal-hal baik lainnya yang menyertai. Selamat menempuh hidup baru"
        },
        {
          url: pic7,
          name: 'Andina selfiana',
          pesan: "Sempurna nya pernikahan bukan karena pasangan sempurna, nanum yang menyempurnakan keduanya"
        },
        {
          url: pic8,
          name: 'Laylatul Jannah',
          pesan: 'Pernikahan bukan sekedar bertemunya antara tulang rusuk dan tulang punggung, tetapi juga Ziyadatul khoir fii kulli hal yaitu "Bertambahnya kebaikan dalam segala hal" Barokallahulakum'          
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
