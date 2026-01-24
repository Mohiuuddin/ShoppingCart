import { Link } from "react-router-dom";

export function Home(){
  return(
    <div className="home">
      <div className="homeContent">
        <h1>Welcome To Toddler's Outfits!</h1>
        <p>We offer premium imported shoes designed for comfort and style for your little ones. More baby and toddler essentials are coming soon!</p>
        <Link to="/Shop" className="shopNow">Shop Now</Link>
      </div>
    </div>
  )
}