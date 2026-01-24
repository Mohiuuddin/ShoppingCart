import { useLocation, Link } from "react-router-dom";
import { FaCheckCircle, FaMapPin, FaBox, FaPhoneAlt, FaPrint, FaShoppingBag, FaExclamationTriangle } from 'react-icons/fa';

export function OrderSuccess() {
  const location = useLocation();
  
  const data = location.state;

  if (!data) {
    return (
      <div className="successContainer">
        <div className="noOrder" style={{  }}>
          <FaExclamationTriangle size={50} color="#ff4d4d" />
          <h1>No Order Found</h1>
          <Link to="/Shop" className="continueBtn" style={{ marginTop: '20px' }}>
             Go to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="successContainer">
      <div className="successCard invoiceMode">
        <div className="successHeader">
          <FaCheckCircle size={60} color="#2ecc71" className="animateCheck" />
          <h1>Order Received!</h1>
          <p>Thank you, <strong>{data.name}</strong>. Your little one's outfits are being prepared!</p>
        </div>

        <div className="invoiceDetails printableInvoice">
          <div className="invoiceHeader">
            <span className="orderIdTag">Order <strong>#{data.orderId}</strong></span>
            <span className="totalTag">Amount Due: <strong>৳{data.total}</strong></span>
          </div>

          <div className="invoiceGrid">
            
            <div className="infoBox">
              <h4><FaMapPin /> Shipping Details</h4>
              <div className="infoContent">
                <p><span className="label">Receiver:</span> {data.name}</p>
                <p><span className="label">Phone:</span> {data.mobile}</p>
                <p><span className="label">Address:</span> {data.address}</p>
              </div>
            </div>

            
            <div className="infoBox">
              <h4><FaBox /> Order Status</h4>
              <div className="infoContent">
                <p><span className="label">Payment:</span> Cash on Delivery</p>
                <p><span className="label">Delivery:</span> 2-3 Working Days</p>
                <p><span className="label">Status:</span> Pending Confirmation</p>
              </div>
            </div>
          </div>
        </div>

        <p className="footerNotice">
          We'll call you in a heartbeat to confirm your order. 💙
        </p>

        <div className="actionButtons">
          <Link to="/Shop" className="continueBtn">
            <FaShoppingBag /> Continue Shopping
          </Link>
          <button onClick={() => window.print()} className="printBtn">
            <FaPrint /> Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
}