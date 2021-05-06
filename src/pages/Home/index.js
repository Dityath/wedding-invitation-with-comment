import React from 'react'
// import { useSelector } from 'react-redux'
import Akad from './Akad'
import Amplop from './Amplop'
import Dokumentasi from './Dokumentasi'
import Footer from './Footer'
import Header from './Header'
import Penutup from './Penutup'
import Undangan from './Undangan'

const Home = () => {
    // const posts = useSelector(state => state?.main?.posts)
    // console.log(posts)
    return (
        <div className="home-container">
            <Header />
            <Undangan />
            <Akad />
            <Dokumentasi />
            <Amplop />
            <Penutup />
            <Footer />
            {/* {
                posts && posts.map((data) => (
                    <p>{data.title}</p>
                ))                
            } */}            
        </div>
    )
}

export default Home
