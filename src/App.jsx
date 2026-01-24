
import './App.css'
import { Navbar } from './components/navbar'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Cart } from './pages/cart';
import { useState } from 'react';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { OrderSuccess } from './components/orderSuccess';
import { ErrorPage } from './components/error';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "Home", element: <Home/> },
      {path: "Shop", element: <Shop/>},
      {path: "Cart", element: <Cart/>},
      {path:"Order-Success", element: <OrderSuccess/> },
    ]

  }
]);


function Layout(){
  const [cartItems, setCartItems] = useState([]);

  const addToCart=(items)=>{
    setCartItems(prev => {
      const updated = [...prev];
      items.forEach(item => {
        const existing = updated.find(
          p =>
            p.productId === item.productId &&
            p.sizeId === item.sizeId
        );

        if (existing) {
          existing.quantity += item.quantity;
        } else {
          updated.push(item);
        }
      });

      return updated;
    });
  }

  const removeFromCart = (productId, sizeId) => {
    setCartItems(prev =>
      prev.filter(
        item =>
          !(item.productId === productId && item.sizeId === sizeId)
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );


  return(
    <>
    <Navbar cartCount={cartCount}/>
    <div>
      <Outlet context={{addToCart, cartItems, removeFromCart, clearCart}}/>
    </div>
    <Contact/>
    <Footer/>
    </>
  );
}


function App() {
  return <RouterProvider router={router}/>
}

export default App
