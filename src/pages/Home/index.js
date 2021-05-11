import React, { useEffect, useState } from 'react'
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
// import audioku from '../../assets/images/audio.mp3'

const Home = () => {
    // const myRef = useRef();    
    const [music, setMusic] = useState(false);    
    // const posts = useSelector(state => state?.main?.posts)
    // console.log(posts)       
    let player;       
    const loadVideo = () => {        
    
        // the Player object is created uniquely based on the id in props        
        player = new window.YT.Player(`existing-iframe-example`, {         
          events: {
              onReady: onPlayerReady,
            },
        });        
                
        document.getElementById('audioku').onclick = function() {            
            console.log(music) 
            let playerState = player.getPlayerState()           
            console.log(window.YT)               
            if(playerState === 0 || playerState === 2 || playerState === -1) {
                console.log("masuk")
                setMusic(true)
                player.playVideo()                
            } else {
                setMusic(false)
                player.pauseVideo() 
            }
        };
      };
    
    
     const onPlayerReady = event => {
        event.target.playVideo();        
        setMusic(true)
      };     
    useEffect(() => {
        Aos.init({duration: 1500, once: true});                    
        if (!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
      
            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = loadVideo;
      
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
          } else { // If script is already there, load the video directly
            loadVideo();

          }
        
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps  
    // console.log(player)            
    // const cdn = "https://cdngarenanow-a.akamaihd.net/webid/FF/emerald/"
   
    console.log(music)
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
                {/* <audio ref={myRef} id="myAudio" autoPlay>
                    <source src={audioku} type="audio/mpeg" />                    
                </audio> */}
                <iframe id="existing-iframe-example"
                        width="0" height="0"
                        src="https://www.youtube.com/embed/p_IwENcMPOA?enablejsapi=1&start=5&playlist=p_IwENcMPOA&loop=1"
                        frameborder="0"    
                        title="video"                        
                ></iframe>
                {                           
                    <img src={music? btnOn: btnOff} id="audioku" alt="" />                                                
                    
                }
            </div>
        </div>
    )
}

export default Home
