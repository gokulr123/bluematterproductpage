import React from 'react'
import './ProductBodyWeb.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
function ProductBodyWeb(props) {
  return (
    <div className='products'>
         <h1 className="heading"> featured <span>products</span> </h1>
         <div className="box-container">
            {
                props.data.map(obj=>{
                    return  <div className="box" onClick={()=>props.onaction(obj.projectid)} key={obj.projectid}>
                    <div className="content">
                           <FontAwesomeIcon icon={faLaptopCode} className="highlight" />
                           <h3>{obj.projectname}</h3>
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
                    
                })
            }
        
         </div>
         
    </div>
  )
}

export default ProductBodyWeb