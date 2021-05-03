import React from 'react'
import avaPria from '../../assets/images/pic_pria.png'
import love from '../../assets/images/love.png'
import avaWanita from '../../assets/images/pic_wanita.png'
import stroke from '../../assets/images/stroke.png'
import strokeMirror from '../../assets/images/stroke_mirror.png'

const Undangan = () => {
    const ulang = [1,2,3,4]
    return (
        <div className="undangan-container">
            <div className="salam">
                <p>Assalamualaikum</p>
            </div>
            <div className="stroke">
                <img src={stroke} alt="" />
            </div>
            <div className="countdown">
                {
                    ulang.map(data => (
                    <>
                        <div className="time">
                            <h1>23</h1>
                            <p>Hari</p>                    
                        </div>
                        {
                            data !== 4?
                            <div className="divider">
                                :            
                            </div>
                            :''
                        }
                    </>
                    ))
                }                
            </div>
            <div className="deskripsi">
                <p>Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan.</p>                
            </div>
            <div className="pasangan">
                <div className="profil-info">
                    <p>Norhasanah</p>
                    <p>Putri dari Bapak Supriadi dan Ibu Sulismina</p>
                </div>
                <div className="profil-pic">
                    <img className="round-ava" src={avaWanita} alt="" />
                    <img className="love" src={love} alt="" />
                    <img className="round-ava" src={avaPria} alt="" />
                </div>
                <div className="profil-info">
                    <p>Alfi S.</p>
                    <p>Putra dari Bapak Supriadi dan Ibu Sulismina</p>
                </div>
            </div>
            <div className="stroke">
                <img src={strokeMirror} alt="" />
            </div>
        </div>
    )
}

export default Undangan
