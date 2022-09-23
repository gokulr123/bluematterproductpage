import React from 'react'
import ProductDetailsDisplay from '../Components/ProductDetailsDisplay/ProductDetailsDisplay'
import Header from '../Components/Header/Header'
function Productdetailsdisplay(props) {
  return (
    <div>
         <Header/>
         <ProductDetailsDisplay data={props.data}/>
    </div>
  )
}

export default Productdetailsdisplay