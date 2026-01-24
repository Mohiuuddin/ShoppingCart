import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export function Navbar({cartCount}) {
  const location = useLocation();
  
  const menuItems = [{name:"Home", path: "/"}, {name: "Shop", path: "/Shop"}, {name: "Cart"  , path: "/Cart", icon: <FaCartShopping size={30} />}];

  return (
    <div className="navBar">
      <div className="navIcon">Toddler's Outfits</div>
      <div className="menu">
        <ul className="menuList">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            
            return(
              <li key={index}  className={`menuItem ${isActive? "active" : ""}`}>
                <Link
              to={item.path}
              
            >
              {item.icon? (<div className="cartWrapper">
                      {item.icon}
                      {cartCount > 0 && (
                        <span className="cartBadge">{cartCount}</span>
                      )}
                    </div>): (item.name)}
              
            </Link>
            </li>
            )

          
})}
        </ul>
        
      </div>
    </div>
  );
}
