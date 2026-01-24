import { FaEye } from "react-icons/fa6";
// import { useState } from "react";


export function Card({product, onQuickView}){


  return(<div className="card">
    <img src={product.mainImage} alt={product.title} loading="lazy" />
    <h3>{product.title}</h3>
    <h3>৳{product.price}</h3>
  
    
  <button className="quickViewBtn" onClick={()=>onQuickView(product)}>
  <FaEye size={18} />
  <span>Quick View</span>
  </button>

  </div>)
}