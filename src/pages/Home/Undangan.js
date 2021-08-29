import React from 'react'
import avaPria from '../../assets/images/pic_pria.png'
import love from '../../assets/images/love.png'
import avaWanita from '../../assets/images/pic_wanita.png'
import stroke from '../../assets/images/stroke.png'
import strokeMirror from '../../assets/images/stroke_mirror.png'
import Countdown from 'react-countdown';

const Undangan = () => {
    // const ulang = [1,2,3,4]
    // const dataWaktu = [
    //     {
    //         num: 23,
    //         text: 'Hari'
    //     },
    //     {
    //         num: 6,
    //         text: 'Jam'
    //     },
    //     {
    //         num: 4,
    //         text: 'Menit'
    //     },
    //     {
    //         num: 2,
    //         text: 'Detik'
    //     }
    // ]
    const dday = new Date(2021, 8, 10)
    // console.log(dday)
    const renderer = ({ formatted: { days, hours, minutes, seconds }}) => {        
        // return <span>Ends in:  {hours} : {minutes} : {seconds}</span>
        return (
            <div className="countdown">
                <div className="time">
                    <h1>{days}</h1>
                    <p>Hari</p>                    
                </div>
                <div className="divider">
                    :            
                </div>
                <div className="time">
                    <h1>{hours}</h1>
                    <p>Jam</p>                    
                </div>
                <div className="divider">
                    :            
                </div>
                <div className="time">
                    <h1>{minutes}</h1>
                    <p>Menit</p>                    
                </div>
                <div className="divider">
                    :            
                </div>
                <div className="time">
                    <h1>{seconds}</h1>
                    <p>Detik</p>                    
                </div>
            </div>
        )
    };
    return (
        <div  id="undangan-wed">

            <div className="undangan-container" data-aos="fade-up">
                <div className="salam">
                    <p>Assalamualaikum</p>
                </div>
                <div className="stroke">
                    <img src={stroke} alt="" />
                </div>
                <Countdown date={dday} renderer={renderer} />
                {/* <div className="countdown">
                    {
                        dataWaktu.map((data, key) => (
                        <>
                            <div className="time" key={key}>
                                <h1>{data.num}</h1>
                                <p>{data.text}</p>                    
                            </div>
                            {
                                key !== 3?
                                <div className="divider">
                                    :            
                                </div>
                                :''
                            }
                        </>
                        ))
                    }                
                </div> */}
                <div className="deskripsi">
                    <p>“Dan nikahkanlah orang-orang yang sendirian di antara kamu, dan orang-orang yang layak (menikah) dari hamba sahayamu yang lelaki dan hamba-hamba sahayamu yang perempuan. jika mereka miskin Allah akan mengkayakan mereka dengan karunianya. Dan Allah Maha Luas (pemberiannya) dan Maha Mengetahui." (QS. An Nuur (24) : 32) <br /><br />

                    Ya Allah, dengan Rahmat dan Ridho-Mu perkenankanlah tautan cinta buah hati kami :</p>                
                </div>
                <div className="pasangan">
                    <div className="profil-info">
                        <p>Fendiansyah</p>
                        <p>Putra dari bapak Hartawi <br />dan ibu Munia</p>
                    </div>
                    <div className="profil-pic">
                        <img className="round-ava" src={avaPria} alt="" />
                        <img className="love" src={love} alt="" />
                        <img className="round-ava" src={avaWanita} alt="" />
                    </div>
                    <div className="profil-info">
                        <p>Hesti Rosita</p>
                        <p>Putri dari <br/> bapak Muhammad Mukri <br /> dan ibu Siti Kamaruyah</p>
                    </div>
                </div>
                <div className="stroke">
                    <img src={strokeMirror} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Undangan
