import React from 'react'
import { useParams } from 'react-router';
import cincin from '../../assets/images/cincin.png'
import goDown from '../../assets/images/go_down.png'
import Navbar from '../../helper/components/Navbar'
const Header = ({more, heightHead}) => {
    let { id } = useParams();    
    let newWords = id? id.split("-"): ['Nama'];    
    
    return (
        <div className="header-container" id="home-wed" style={heightHead? {minHeight:"100%"}:{minHeight: "100vh"}} >
            <Navbar />
            <div className="info" data-aos="fade-up" >
                <div className="info-undangan">
                    <img src={cincin} alt="" />
                    <h1>Mukti &#38; Norhasanah</h1>
                    <h4>26th May 2021</h4>
                </div>
                <div className="info-tamu">
                    <p>Dear</p>
                    <p>{newWords.map(word => word + " ")} </p>
                    <div></div>
                </div>
                <div className="btn-more">
                    <a href="#undangan-wed" onClick={more}>
                        <img src={goDown} alt="" />
                    </a>
                    <p>Info Lebih Lanjut</p>
                </div>
            </div>
        </div>
    )
}

export default Header
