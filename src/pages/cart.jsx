
import { EmptyCart } from "../components/emptyCart";
import { useOutletContext, useNavigate } from "react-router-dom";
import { FaUser, FaPhone, FaMapMarkerAlt, FaTruck, FaTrashAlt } from 'react-icons/fa';
import { useState } from "react";

export function Cart() {
  const { cartItems, removeFromCart, clearCart } = useOutletContext();
  const [shipping, setShipping] = useState(70);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  }) 
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = (e)=>{
    e.preventDefault();
    const orderId = "TO-" + Math.floor(1000 + Math.random() * 9000);

    const invoiceData = {
      orderId,
      ...formData, 
      total: subtotal + shipping,
      itemsCount: cartItems.length
    };

    clearCart();
    navigate("/Order-Success", { state: invoiceData });

  }

  return (
    <div className="cartPageContainer">
      <div className="cartHeader">
        <h1>Your Shopping Bag</h1>
        <p>{cartItems.length} items ready for your little one</p>
      </div>

      <div className="cartLayout">
      
        <div className="itemsSection">
          {cartItems.map(item => (
            <div key={`${item.productId}-${item.sizeId}`} className="cartItem">
              <div className="itemImageWrapper">
                <img src={item.image} alt={item.title} />
              </div>
              
              <div className="itemInfo">
                <h3>{item.title}</h3>
                <p className="itemMeta">Size: {item.sizeLabel} | Qty: {item.quantity}</p>
                <p className="itemPrice">৳{item.price * item.quantity}</p>
              </div>

              
              <button className="removeIconBtn" title="Remove item" onClick={()=>removeFromCart(item.productId, item.sizeId)}>
                <FaTrashAlt size={15}/>
              </button>
            </div>
          ))}
        </div>

        
        <aside className="checkoutSection">
          <div className="summaryCard">
  <h3>Order Summary</h3>
  <div className="summaryRow">
    <span>Subtotal</span>
    <span>৳{subtotal}</span>
  </div>
  
  <div className="summaryRow">
    <span>Shipping</span>
    <select 
      className="shippingSelect" 
      value={shipping} 
      onChange={(e) => setShipping(Number(e.target.value))}
    >
      <option value={70}>Inside Dhaka (৳70)</option>
      <option value={130}>Outside Dhaka (৳130)</option>
    </select>
  </div>

  <div className="summaryRow total">
    <span>Total</span>
    <span>৳{subtotal + shipping}</span>
  </div>
</div>

          <form className="codForm" onSubmit={handleConfirmOrder}>
            <h3>Delivery Details</h3>
            <p className="codNotice"><FaTruck size={20}/> Cash on Delivery Only</p>
            
            <div className="inputField">
              <FaUser className="formIcon" />
              <input type="text" placeholder="Full Name" value={formData.name} 
              onChange={(e)=>setFormData({...formData, name: e.target.value})}
              required />
            </div>

            <div className="inputField">
              <FaPhone className="formIcon" />
              <input type="tel" placeholder="Mobile Number" maxLength="11" value={formData.mobile} 
              onChange={(e)=>setFormData({...formData, mobile: e.target.value})}
              required />
            </div>

            <div className="inputField">
              <FaMapMarkerAlt className="formIcon" />
              <textarea placeholder="Full Address (House, Road, Area)" value={formData.address}
              onChange={(e)=>setFormData({...formData, address: e.target.value})}
              required></textarea>
            </div>

            <button type="submit" className="completeOrderBtn">
            Confirm Order ৳{subtotal + shipping}
            </button>
          </form>
        </aside>
      </div>
    </div>
  );
}