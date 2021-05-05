import React, { useState } from 'react'
import imgBarcode from '../../assets/images/barcode.png'
import imgBarcode1 from '../../assets/images/barcode_1.png'

const Amplop = () => {
    const [btn, setBtn] = useState(true)
    return (
        <div className="amplop-container">
            <h1 className="title">Amplop Online</h1>
            <p className="deskripsi">Bagi para undangan yang ingin memberikan amplop secara digital dapat menggunakan motode yang ada di bawah ini</p>
            <div className="option">
                <div className="option-online">
                    <div className="btn" onClick={() => setBtn(true)}>
                        Dana
                    </div>
                    <div className="btn" onClick={() => setBtn(false)}>
                        Transfer
                    </div>
                </div>
                <div className="option-barcode">
                    {
                        btn?
                        <>
                            <img src={imgBarcode} alt="" />
                            <p>A/N Muhammad Juliandro</p>
                        </>
                        :
                        <>
                            <img src={imgBarcode1} alt="" />
                            <p>A/N Muhammad Alfi</p>
                        </>
                    }                    
                </div>
            </div>
        </div>
    )
}

export default Amplop
