import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className='a'>
        <div className='b'>
            <div className="container">
                <div className="sec aboutus">
                    <h1>About us</h1>
                    <p>somitingLine 22:25:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md</p>

                
                <ul className="sci">
                    <li><a href=""><FontAwesomeIcon icon={faLaptopCode}/></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faLaptopCode}/></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faLaptopCode}/></a></li>
                </ul>
                </div>
            
            <div className="sec quicklinks">
                <h1>Quick Likns</h1>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Project</a></li>
                </ul>
            </div>
            <div className="sec contact">
                <h1>Contact Info</h1>
                <ul className="info">
                    <li>
                        <span><FontAwesomeIcon icon={faLaptopCode}/></span>
                        <span> FXRF+M4G, Poojapura, Thiruvananthapuram, Kerala 695012</span>
                    </li>
                    <li>
                        <span><FontAwesomeIcon icon={faLaptopCode}/></span>
                        <span> FXRF+M4G, Poojapura, Thiruvananthapuram, Kerala 695012</span>
                    </li>
                    <li>
                        <span><FontAwesomeIcon icon={faLaptopCode}/></span>
                        <span> FXRF+M4G, Poojapura, Thiruvananthapuram, Kerala 695012</span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer