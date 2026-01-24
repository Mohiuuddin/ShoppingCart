import { Link } from "react-router-dom";

export function EmptyCart(){
  return(
    <div className="emptyCart">
      <div className="emptyCartContent">
        <h1 className="emptyCartTitle">
        Your cart is empty! Click below to start shopping.
      </h1>
      <Link to="/Shop" className="shopNow">Shop Now</Link>
      </div>
    </div>
  )
}