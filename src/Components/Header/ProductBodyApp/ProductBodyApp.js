import React from 'react'
import './ProductBodyApp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
function ProductBodyApp() {
    const icon=faMobileAlt
  return (
    <div className='products'>
         <h1 className="heading"> featured <span>products</span> </h1>
         <div className="box-container">
            <div className="box">
         <div className="content">
                <FontAwesomeIcon icon={icon} className="highlight" />
                <h3>Web Development</h3>
                <div className="price">$249.99 <span>$399.99</span></div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            </div>
            <div className="box">
         <div className="content">
                <FontAwesomeIcon icon={icon} className="highlight" />
                <h3>Web Development</h3>
                <div className="price">$249.99 <span>$399.99</span></div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            </div>
            <div className="box">
         <div className="content">
                <FontAwesomeIcon icon={icon} className="highlight" />
                <h3>Web Development</h3>
                <div className="price">$249.99 <span>$399.99</span></div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            </div>
            <div className="box">
         <div className="content">
                <FontAwesomeIcon icon={icon} className="highlight" />
                <h3>Web Development</h3>
                <div className="price">$249.99 <span>$399.99</span></div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            </div>
            <div className="box">
         <div className="content">
                <FontAwesomeIcon icon={icon} className="highlight" />
                <h3>Web Development</h3>
                <div className="price">$249.99 <span>$399.99</span></div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            </div>
            <div className="box">
         <div className="content">
                <FontAwesomeIcon icon={icon} className="highlight" />
                <h3>Web Development</h3>
                <div className="price">$249.99 <span>$399.99</span></div>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            </div>
           

         </div>
         
    </div>
  )
}

export default ProductBodyApp