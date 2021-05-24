import React from 'react'
import Slider from "react-slick";
import pic1 from '../../assets/images/ucapan_3.png'
import pic2 from '../../assets/images/ucapan_2.png'
import pic3 from '../../assets/images/ucapan_4.png'
import pic4 from '../../assets/images/ucapan_5.png'
import pic5 from '../../assets/images/ucapan_6.png'
import pic6 from '../../assets/images/ucapan_7.png'
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
            name: 'Afuza Imam Awed Alfaruq',
            pesan: 'Untuk Suami, Percayalah, ketika engkau memuliakan istrimu, maka sejak saat itu kebahagiaan akan selalu menghampirimu... Untuk Istri, Suami tidak akan pernah berhenti untuk memikirkan pasangannya (istri). Percayalah, dia selalu memikirkan dan memberikan yang terbaik untuk dirimu...'
        },
        {
            url: pic2,
            name: 'Anddy Marrusliansyah',
            pesan: 'Kami tidak bisa memberikan sesuatu yang terbaik untuk dirimu, teman sekaligus keluarga untukmu. Setelah sekian lama akhirnya dirimu menemukan tambatan hati yang terakhir, kami akan selalu berdoa semoga hal terbaik menyertai u dan mampu mengarungi bahtera keluarga yang baru'
        },
        {
            url: pic3,
            name: 'Bu Eka Rubiyatun',
            pesan: 'Komitmen, kesabaran, dan kesetiaan menjadi tiga bahan yang perlu dipupuk dalam pernikahan. Jangan berhenti untuk merawat, karena bunga itu akan menemanimu setiap saat.'
        },
        {
            url: pic4,
            name: 'Putri Dian Nawwirah',
            pesan: 'Selamat menempuh hidup baru & selamat berbahagia Kakakku... Semoga Allah memberikan keberkahan kepadamu serta keberkahan atasmu dan semoga Allah mengumpulkan kalian berdua dalam kebaikan....'
        },
        {
            url: pic5,
            name: 'Novita',
            pesan: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khoir.  Selamat menempuh hidup baru ...d berikan keturuan yang shalih  shalihah... Semoga suami mu bisa menjadi pendamping dunia dan akhirat mu.. dan bisa membahagiakan mu lahir dan batin."
        },
        {
            url: pic6,
            name: 'Lila Zein',
            pesan: "Buat kak Sanah, dan bang Mukti.... Selamat menempuh kehidupan yang penuh keberkahan, dan kebahagiaan duniaakhirat. 'Sebuah pernikahan itu bagaikan rantai dan cincin emas,  Yang diawali dengan secercah sinar terang dan di akhiri dengan keabadian'"
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
