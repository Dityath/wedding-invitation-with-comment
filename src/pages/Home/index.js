import React, { useEffect, useRef, useState } from 'react'
// import { useSelector } from 'react-redux'
import Aos from "aos"
import "aos/dist/aos.css"

import Akad from './Akad'
import Amplop from './Amplop'
import Dokumentasi from './Dokumentasi'
import Footer from './Footer'
import Header from './Header'
import Penutup from './Penutup'
import Undangan from './Undangan'
import Ucapan from './Ucapan'

import btnOn from '../../assets/images/On.png'
import btnOff from '../../assets/images/Off.png'

const Home = () => {
    const myRef = useRef();    
    const [music, setMusic] = useState(true);    
    // const posts = useSelector(state => state?.main?.posts)
    // console.log(posts)
    useEffect(() => {
        Aos.init({duration: 1500, once: true});        
    }, []);                 
    // const cdn = "https://cdngarenanow-a.akamaihd.net/webid/FF/emerald/"

    const play = () => {
        setMusic(true);
        myRef.current.play()          
    }
    const pause = () => {
        myRef.current.pause()          
        setMusic(false);                
    }
    return (
        <div className="home-container">
            <Header />
            <Undangan />
            <Akad />
            <Dokumentasi />
            <Amplop />
            <Ucapan />
            <Penutup />            
            <Footer />
            {/* {
                posts && posts.map((data) => (
                    <p>{data.title}</p>
                ))                
            } */}            
            <div className="btn-audio">     
                {
                    // music?
                    // <iframe src="https://res.cloudinary.com/bagastri07/video/upload/v1620572921/y2mate.com_-_Marry_Me_Thomas_Rhett_Lyrics_btvj9e.mp3"
                    //     frameBorder='0'
                    //     allow='autoplay; encrypted-media'                            
                    //     title='video'
                    //     width="0"
                    //     height="0"
                    // /> 
                    // :
                    // ''
                }         
                <audio ref={myRef} id="myAudio" autoPlay muted={false}>
                    <source src="https://res.cloudinary.com/bagastri07/video/upload/v1620572921/y2mate.com_-_Marry_Me_Thomas_Rhett_Lyrics_btvj9e.mp3" type="audio/mpeg" />                    
                </audio>
                {
                    music?
                    <img src={btnOn} onClick={pause} alt="" />                
                    :
                    <img src={btnOff} onClick={play} alt="" />                

                }
            </div>
        </div>
    )
}

export default Home
