import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const [state,setstate] = useState(false)

    const h= state? {'height':'200px'} : {}
  return (
    <div className='headerbody' style={h}>
        
        <header >
            <div className='logoplustoggle'>
            <h1 style={{'color':'white','marginRight':'auto'}}>Blue Matter</h1>
            {/* <img src="" alt="" /> */}
            <FontAwesomeIcon icon={faBars} className='toggle'onClick={()=>setstate(!state)} /></div>
            <nav >
                <ul className='nav_links'>
                    <li><a href="">Services</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </nav>
            <a className='cta' href=""><button>Contact</button></a>
        </header>
    </div>
  )
}

export default Header