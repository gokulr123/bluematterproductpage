import React, { useState } from 'react'
import './ProductCategoryHeader.css'
import ProductBodyApp from '../ProductBodyApp/ProductBodyApp'
import ProductBodyWeb from '../ProductBodyWeb/ProductBodyWeb'

function ProductCategoryHeader(props) {
    console.log(props.onaction)
  
    const [state,setstate] = useState(0)
  return (
    
    <div>
    <div className="category">

    <h1 className="heading"> shop by <span>category</span> </h1>

    <div className="box-container">

        <div className={`box ${state === 1 ? 'selected' : ''}`}  onClick={()=>setstate(1)}>
            <img src="../../../web.png" alt=""/>
            <h1><b>Web Development Projects</b> </h1>
        </div>

        <div className={`box ${state === 2 ? 'selected' : ''}`} onClick={()=>setstate(2)}>
            <img src="../../../app.png" alt=""/>
            <h1><b>App Development Projects</b></h1>
        </div>

        {/* <a href="" className="box">
            <img src="images/cat_img3.png" alt=""/>
            <h3>headphones</h3>
        </a>

        <a href="" className="box">
            <img src="images/cat_img4.png" alt=""/>
            <h3>smartwatches</h3>
        </a>

        <a href="" className="box">
            <img src="images/cat_img5.png" alt=""/>
            <h3>games</h3>
        </a>

        <a href="" className="box">
            <img src="images/cat_img6.png" alt=""/>
            <h3>camera</h3>
        </a>

        <a href="" className="box">
            <img src="images/cat_img7.png" alt=""/>
            <h3>speakers</h3>
        </a> */}

    </div>

</div>
        
         {state <= 1 && <ProductBodyWeb data={props.data} onaction={props.onaction} />}
         {state === 2 && <ProductBodyApp/>}
     


 </div>
   
  )
}

export default ProductCategoryHeader