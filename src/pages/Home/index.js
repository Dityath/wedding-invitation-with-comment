import React from 'react'
import { useSelector } from 'react-redux'
import Akad from './Akad'
import Header from './Header'
import Undangan from './Undangan'

const Home = () => {
    const posts = useSelector(state => state?.main?.posts)
    console.log(posts)
    return (
        <div className="home-container">
            <Header />
            <Undangan />
            <Akad />
            {/* {
                posts && posts.map((data) => (
                    <p>{data.title}</p>
                ))                
            } */}            
        </div>
    )
}

export default Home
