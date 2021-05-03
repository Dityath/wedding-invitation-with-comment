import React from 'react'
import cincin from '../../assets/images/cincin.png'
import Navbar from '../../helper/components/Navbar'
const Header = () => {
    return (
        <div className="header-container">
            <Navbar />
            <div className="info">
                <div className="info-undangan">
                    <img src={cincin} alt="" />
                    <h1>Mukti &#38; Norhasanah</h1>
                    <h4>26th May 2021</h4>
                </div>
                <div className="info-tamu">
                    <p>Dear</p>
                    <p>Alfi Syahri &#38; Istri</p>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Header
