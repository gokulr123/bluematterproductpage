import React, { useState } from 'react'
import './ProductDetailsDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
function ProductDetailsDisplay(props) {
  const [state,setstate] = useState(0)
  function slideImage(imgId){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}   
   console.log(state)
    console.log(props.data[0])
    console.log(props.data[0].image3) 
    console.log(props.data[0].image2)
  return (
    <div><div className = "card-wrapper">
    <div className = "card">
     
      <div className = "product-imgs"> 
        <div className = "img-display">
          <div className = "img-showcase" >
            <img src ="../../../s4.png" alt = "shoe image"/>
            <img src = "../../../disaster2.png" alt = "shoe image"/>
            <img src ="../../../disaster3.png" alt = "shoe image"/>
            <img src = "../../../s2.png" alt = "shoe image"/>
          </div>
        </div>
        <div className = "img-select" >
          <div className = "img-item" onClick={()=>slideImage(1)}>
              <img src = "../../../s4.png" alt = "shoe image"/>
          </div>
          <div className = "img-item" onClick={()=>slideImage(2)}>
              <img src = "../../../disaster2.png" alt = "shoe image"/>
          </div>
          <div className = "img-item" onClick={()=>slideImage(3)} >
              <img src ="../../../disaster3.png" alt = "shoe image"/>
          </div>
          <div className = "img-item" onClick={()=>slideImage(4)}>
              <img src = "../../../s2.png" alt = "shoe image"/>
          </div>
        </div>
      </div>
      
      <div className = "product-content">
        <h2 className = "product-title">{props.data[0].projectname}</h2>
        {/* <a href = "#" className = "product-link">visit nike store</a> */}
        <div className = "product-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar}  />
        <FontAwesomeIcon icon={faStar}  />
        <FontAwesomeIcon icon={faStar}  />
        <FontAwesomeIcon icon={faStar}  />

          {/* <span>4.7(21)</span> */}
        </div>

        <div className = "product-price">
          <p className = "last-price">Old Price: <span>${props.data[0].oldprice}</span></p>
          <p className = "new-price">New Price: <span>${props.data[0].newprice}</span></p>
        </div>

        <div className = "product-detail">
          <h2 style={{'fontSize':'2rem'}}>Project Abstract: </h2>
          <p>{props.data[0].abstract}</p>
         
          <ul>
            <li>Project Type: <span>{props.data[0].projecttype}</span></li>
            <li>Frontend: <span>{props.data[0].frontend}</span></li>
            <li>Backend: <span>{props.data[0].backend}</span></li>
            <li>Database: <span>{props.data[0].database}</span></li>
            <li>Shipping Fee: <span>Free</span></li>
          </ul>
        </div>

        {/* <div className = "purchase-info">
          <input type = "number" min = "0" value = "1"/>
          <button type = "button" className = "btn">
            Add to Cart <i className = "fas fa-shopping-cart"></i>
          </button>
          <button type = "button" className = "btn">Compare</button>
        </div> */}

        {/* <div className = "social-links">
          <p>Share At: </p>
          <a href = "#">
            <i className = "fab fa-facebook-f"></i>
          </a>
          <a href = "#">
            <i className = "fab fa-twitter"></i>
          </a>
          <a href = "#">
            <i className = "fab fa-instagram"></i>
          </a>
          <a href = "#">
            <i className = "fab fa-whatsapp"></i>
          </a>
          <a href = "#">
            <i className = "fab fa-pinterest"></i>
          </a>
        </div> */}
      </div>
    </div>
  </div></div>
  )
}

export default ProductDetailsDisplay
