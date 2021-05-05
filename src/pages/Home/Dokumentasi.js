import React from 'react'

const Dokumentasi = () => {
    return (
        <div className="dokumentasi-container">            
            <h1 className="title">Photos Gallery</h1>
            <h1 className="title">Video Pre-Wedding</h1>
            <div className="video">
                <div className="video-wrapper">
                    <iframe
                            src="https://www.youtube.com/embed/G14TFnPsC_4"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                            width="560"
                            height="315"
                    />

                </div>
                
            </div>

        </div>
    )
}

export default Dokumentasi
