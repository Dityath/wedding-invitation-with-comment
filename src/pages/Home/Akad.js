import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { FaCalendarAlt, FaInstagram } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Akad = () => {
    return (
        <div className="akad-container">
            <div className="pembuka">
                <p>﷽</p>
            </div>
            <div className="judul">
                <p>Akad Nikah dan Walimatul 'Ursy</p>
            </div>
            <div className="text">
                <p>In sha Allah akan dilaksanakan pada :</p>
            </div>
            <div className="info">     
                <div className="info-judul">
                    <h2>Waktu dan Tempat</h2>                
                    <div></div>
                </div>           
                <div className="detail">
                    <div className="detail-wl">
                        <BiTimeFive size="3vmax" color="white" />
                        <p>08.00 - 21.00 WIB</p>                    
                    </div>
                    <div className="detail-wl">
                        <FaCalendarAlt size="3vmax" color="white" />
                        <p>Rabu, 25 Mei 2021</p>
                    </div>
                    <div className="detail-wl">
                        <FiMapPin size="3vmax" color="white" />
                        <p>Stadion Gelora Bung Karno</p>
                    </div>                

                </div>
            </div>
            <div className="btn">
                <div className="btn-link">
                    <ImLocation size="3vmax" color="#4E937E" />
                    <p>Google Maps</p>
                </div>
                <div className="btn-link">
                    <FaInstagram size="3vmax" color="#4E937E" />
                    <p>Live Instagram</p>
                </div>
            
            </div>

        </div>
    )
}

export default Akad
