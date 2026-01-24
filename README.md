🧸 Toddler’s Outfits – Shopping Cart Web App

A modern e-commerce web application for toddler shoes and outfits, built with React and React Router.
Designed with simplicity, clean state management, and a smooth shopping experience in mind.

✨ Features

🛍️ Browse products in the Shop

👟 Select shoe sizes and quantities per product

➕ Add multiple sizes of the same product to cart

🗑️ Remove items from cart (no quantity update logic)

🧮 Auto cart count in Navbar

🚚 Shipping cost selection (Inside / Outside Dhaka)

💰 Live subtotal & total calculation

📭 Empty Cart UI when cart is empty

📞 Contact section visible on every page

📱 Responsive & user-friendly UI

🧠 State Management Approach

This project does NOT use Context API or Redux.

Instead, it uses:

React Router <Outlet context />

Single source of truth for cart state in Layout

Why this approach?

Simple

Predictable

Easy to debug

Perfect for small–medium apps

🏗️ Application Structure
src/
│
├── components/
│   ├── navbar.jsx
│   ├── contact.jsx
│   ├── footer.jsx
│   └── emptyCart.jsx
│
├── pages/
│   ├── home.jsx
│   ├── shop.jsx
│   └── cart.jsx
│
├── App.jsx
└── main.jsx

🔁 Data Flow (Very Important)
Cart State Lives In:
Layout.jsx

Passed Down Using:
<Outlet context={{ addToCart, cartItems, removeFromCart }} />

Accessed In Pages Using:
const { cartItems, addToCart, removeFromCart } = useOutletContext();


✅ No prop drilling
✅ No global context
✅ Clean separation of concerns

🛒 Cart Item Data Model

Each cart item represents one product + one size.

{
  productId: number,
  title: string,
  sizeId: number,
  sizeLabel: string,
  quantity: number,
  price: number,
  image: string
}


Same shoe with different sizes = different cart items

Example:

Shoe A – 11cm × 2

Shoe A – 13cm × 1

🗑️ Removing Items From Cart

Only remove, no quantity update.

const removeFromCart = (productId, sizeId) => {
  setCartItems(prev =>
    prev.filter(
      item =>
        !(item.productId === productId && item.sizeId === sizeId)
    )
  );
};

🚦 Routing Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "Shop", element: <Shop /> },
      { path: "Cart", element: <Cart /> }
    ]
  }
]);

📞 Contact Section

Displayed on every page, includes:

Email

Phone / WhatsApp

Location

Delivery info

Social media links
(No form – simple & clean)

🎨 UI & Styling

Navbar color: #16C0E4

Footer & Contact section styled to match brand

Icons powered by react-icons

Clean layout with focus on readability

🚀 Future Enhancements (Optional)

💾 Persist cart using localStorage

🔔 Toast notifications (add/remove)

🤖 AI product recommendations

📦 Order submission backend

📊 Admin dashboard

🧑‍💻 Tech Stack

React

React Router v6

Vite

CSS

React Icons