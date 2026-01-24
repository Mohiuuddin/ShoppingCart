import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaShareAlt } from 'react-icons/fa';

export function Contact(){
  return(
   
    <section className="contactSection">
      <div className="contactHeader">
        <h2>Get in Touch</h2>
        <p>We’re happy to help with orders, sizes, or anything else 💙</p>
      </div>

      <div className="contactGrid">
      
        <div className="contactCard">
          <FaPhoneAlt className="cardIcon" />
          <h3>Call Us</h3>
          <a href="tel:+8801602942432">+880 1602942432</a>
          <span>Always here when you need us</span>
        </div>

        
        <div className="contactCard">
          <FaEnvelope className="cardIcon" />
          <h3>Email Us</h3>
          <a href="mailto:toddlers.outfitsss@gmail.com">toddlers.outfitsss@gmail.com</a>
          <span>We'll reply in a heartbeat</span>
        </div>

        
        <div className="contactCard">
          <FaShareAlt className="cardIcon" />
          <h3>Follow Us</h3>
          <div className="socialLinks">
            <a href="https://facebook.com/toddleroutfits" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/toddlersoutfitsss" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@toddlers.outfits" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
          <span>Join our community!</span>
        </div>
      </div>
      
      <p className="locationNote">Location: Dhaka, Bangladesh | Delivery Nationwide</p>
    </section>



  );
}