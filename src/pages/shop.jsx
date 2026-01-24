import { Card } from '../components/card.jsx';
import {products} from "../components/data.js";
import { Link, useOutletContext } from 'react-router-dom';
import { FaChevronRight, FaChevronDown  } from "react-icons/fa6";
import { useState } from 'react';
import { ProductDetails } from '../components/productDetails.jsx';

export function Shop(){
  const [selectedProduct, setSelectedProduct]= useState(null);
  const {addToCart} = useOutletContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage]= useState(8);

  const totalPage = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  return(
    <div className="shop">
      <h1 className='shopTitle'>Shop</h1>
      <div className='breadcrumb'>
      <Link to="/">Home</Link>
      <FaChevronRight/> 
      <span>Products</span>  
      <FaChevronDown/>   
      </div>
      <div className="cards">
        {
          paginatedProducts.map(product=>(
            <Card key={product.id} product={product} onQuickView={setSelectedProduct}/>
          ))
        }
      </div>

      {
        selectedProduct &&(
          <ProductDetails product={selectedProduct} onClose={()=> setSelectedProduct(null)} onAddToCart={addToCart}/>
        )
      }

      <div className='pagination'>
        <hr className='hrLine'/>

        <div className='paginationContent'>
          <div className='paginationSelect'>
            <select name="itemsPerPage" id="itemsPerPage" className='paginationSelect'  
            onChange={(e)=>{setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
            }}>
    <option value="8">Show 8</option>
    <option value="16">Show 16</option>
    <option value="24">Show 24</option>
            </select>
          </div>
          <div className='paginationBtn'>
            <button disabled={ currentPage === 1} onClick={()=>setCurrentPage(prev => prev - 1)}>Prev</button>
            <p>Page {currentPage} of {totalPage}</p>
            <button disabled={currentPage === totalPage} onClick={()=>setCurrentPage(prev => prev + 1)}>Next</button>
          </div>
        </div>
      
      </div>


    </div>
  );
}