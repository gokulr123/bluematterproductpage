import React, { useState } from 'react'
import ProductCategoryHeader from '../Components/ProductCategoryHeader/ProductCategoryHeader'
import Header from '../Components/Header/Header'
import ProductDetailsDisplay from '../Components/ProductDetailsDisplay/ProductDetailsDisplay'

function Productpage(props) {
  const[first,setsecond]=useState(0)
  const[state,setstate]=useState([])
  function handleclick(id){
    const newlist=props.data.filter((item)=>{
           return id===item.projectid
    })
   setstate(newlist)
   setsecond(1)
  }
  return (
    <div>
        <Header/>
        {first===0 ? <ProductCategoryHeader data={props.data} onaction={handleclick}/>: <ProductDetailsDisplay data={state} />}
       
       
    </div>
  )
}

export default Productpage

