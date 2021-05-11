import React from 'react'
import './style.scss'
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = React.useState(false)
    const link = [
        {
            route:'#home-wed',
            text: 'Home'
        },
        {
            route:'#add-wed',
            text: 'Address'
        },
        {
            route:'#gal-wed',
            text: 'Photo'
        },
        {
            route:'#vid-wed',
            text: 'Video'
        },
        {
            route:'#home-sea',
            text: 'Contact Us'
        },
    ]    
    const onClick = () => showHamburgerMenu ? setShowHamburgerMenu(false) : setShowHamburgerMenu(true)
    return (        
            <nav id="scrl">
                <div className="icon-menu">
                    {
                        showHamburgerMenu ?
                        <FaTimes size={25} onClick={onClick} />:
                        <FaBars size={25} onClick={onClick} />                    
                    }                    
                </div>  
                <div className="logo">
                    <h1>WEDDINGS</h1>
                </div>  

                <div className="menu">
                    <ul className={showHamburgerMenu ? 'showing' : ''} > 
                        {
                            link.map((data, key) => (
                                <li className="bg-biru" key={key}>
                                    <a href={data.route}>
                                        <span> {data.text} </span>
                                    </a>
                                </li>                        
                            ))
                        }                        
                    </ul>
                </div>
            </nav>        
    )
}

export default Navbar
