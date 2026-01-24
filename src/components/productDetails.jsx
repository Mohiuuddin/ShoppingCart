import { useState } from "react"

export function ProductDetails({product, onClose, onAddToCart}){

  const [quantities, setQuantities] = useState({});

  const [activeImage, setActiveImage] = useState(product.mainImage);

  const [cartMessage, setCartMessage] = useState("");

  const changeImage= (img)=>{
    setActiveImage(img);
  }
  

  const handleChange = (sizeId, value, max)=>{
    if (value === "") {
    setQuantities(prev => ({
      ...prev,
      [sizeId]: ""
    }));
    return;
  }

    const qty = Math.max(0, Math.min(Number(value), max));
    setQuantities((prev)=>(
      {
        ...prev,
        [sizeId]: qty
      }
    ))
  }

  const increment =(sizeId, max)=>{

    setQuantities((prev)=>({
      ...prev,
      [sizeId]: Math.min((prev[sizeId] || 0) + 1, max)
    }))

  }

  const decrement = (sizeId)=>{
    setQuantities((prev)=>(
      {
        ...prev, 
        [sizeId]: Math.max((prev[sizeId] || 0) - 1, 0)
      }
    ));

  }

  const handleCart = ()=>{
    const items = product.sizes.
    map(size => {
      const qty = Number(quantities[size.id] || 0);
      if(qty === 0) return null;

      return {
        productId: product.id,
        title: product.title,
        sizeId: size.id,
        sizeLabel: size.label,
        quantity: qty,
        price: product.price,
        image: product.mainImage
      };

    }).filter(Boolean);
    if(items.length === 0){
      setCartMessage("Please select at least one size.");
    return;
    }

    onAddToCart(items);
    onClose();

  }

  return(
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeBtn" onClick={onClose}>X</button>
        <div className="product">
          <div className="productImages">
          <div className="mainImg"><img src={activeImage}/></div>
          <div className="images">
            <img src={product.mainImage} onClick={()=>changeImage(product.mainImage)}/>
            {product.images.map(image => (<img key={image} src={image} onClick={()=>changeImage(image)} />))}
          </div>
        </div>
        <div className="productDetails">
          <h1 className="productTitle">{product.title}</h1>
          <p className="productPrice">Price: ৳{product.price}</p>
          <p className="productDescription"> {product.description}</p>
          <table className="sizeTable">
            <thead>
              <tr>
                <th>Size (cm)</th>
                <th>Age Range</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {product.sizes.map(size=>(
                <tr key={size.id}>
                  <td>{size.label}</td>
                  <td>{size.ageRange}</td>
                  <td>{size.stock > 0 ? 
                  (<span className="inStock">In Stock</span>) : 
                  (<span className="outStock">Out of Stock</span>)
                  }</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sizeSelection">
              <h3>Select Size and Quantity:</h3>
            {product.sizes.map(size=>{
              return(
                <div key={size.id} className="sizeRow">
                  <button className="sizeBtn" disabled={size.stock === 0}>{size.label}</button>

                  {
                    size.stock > 0 &&(
                      <div className="quantityControls">
                  <button onClick={()=>decrement(size.id)}>-</button>
                  <input type="number" min="0" max={size.stock} 
                  value={quantities[size.id] || 0} 
                  onChange={(e)=>handleChange(size.id, e.target.value, size.stock)}
                  />
                  <button onClick={()=> increment(size.id, size.stock)}>+</button>
                  </div>
                    )
                  }
                
                </div>
              )
            })}
          </div>
          <div className="addCart">
            {cartMessage && <p className="cartMessage">{cartMessage}</p>}
            <button className="cartBtn" onClick={handleCart}>Add to Cart</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}