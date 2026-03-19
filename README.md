# 🧸 Toddler’s Outfits — Premium React E-Commerce Web App

A specialized, high-performance e-commerce platform for toddler apparel and footwear. This project demonstrates a sophisticated approach to **Single Page Application (SPA)** development using **React 18** and **React Router v6**, prioritizing clean state management and a frictionless user journey.

**🔗 [Live Preview](https://shopping-cart-pi-flame-85.vercel.app/)**

---

## 🚀 Key Features

* **Dynamic Product Catalog:** A curated shop featuring premium imported footwear with high-resolution imagery and live stock status.
* **Complex Multi-Variant Cart:** Supports adding multiple sizes of the same product (e.g., 11cm and 13cm) as distinct line items—a critical feature for footwear retail.
* **Intelligent Order Engine:**
    * **Shipping Logic:** Integrated regional shipping toggles (Inside/Outside Dhaka).
    * **Live Calculations:** Real-time subtotal and total updates based on cart contents and delivery location.
    * **Auto-Sync:** Navbar cart counter stays synchronized across all application routes.
* **Interactive Quick View:** A specialized modal interface for rapid size selection and quantity adjustment without navigating away from the shop.
* **Modern UI/UX:** Built with a "Mobile-First" philosophy, featuring empty cart states, responsive grids, and an integrated global contact section.

---

## 🛠️ Technical Architecture

### 1. Architectural State Management
This project bypasses the overhead of Redux or Context API in favor of **React Router v6 `<Outlet context />`**. 
* **Single Source of Truth:** All cart logic and state reside in the root `Layout.jsx`.
* **Zero Prop Drilling:** State and handlers (`addToCart`, `cartItems`, `removeFromCart`) are globally accessible to all child routes via `useOutletContext()`.
* **Predictability:** This approach ensures the data flow is easy to debug, highly performant, and follows modern React best practices.

### 2. Robust Data Model
To ensure data integrity, every cart item follows a strict schema:

```javascript
{
  productId: number,
  title: string,
  sizeId: number,
  sizeLabel: string,
  quantity: number,
  price: number,
  image: string
}
````

*Note: The system treats the same product with different sizes as unique entries to ensure accurate order fulfillment.*

### 3\. Declarative Routing

Utilizes `createBrowserRouter` to manage application navigation, including nested layouts and index routes for a seamless SPA feel.

-----

## 📦 Tech Stack

  * **Core Framework:** React 18
  * **Routing:** React Router v6
  * **Build System:** Vite (Optimized for fast HMR and production builds)
  * **Icons:** React Icons
  * **Deployment:** Vercel
  * **Styling:** CSS3 (Custom Modules & Responsive Design)

-----

## 🚦 Application Structure

```text
src/
├── components/   # Reusable UI (Navbar, Footer, Contact, EmptyCart)
├── pages/        # Route-level components (Home, Shop, Cart)
├── App.jsx       # Router configuration
└── Layout.jsx    # Root wrapper & Global State container
```

-----

## 💡 Professional Insights

As an ICT professional, I designed this platform with **scalability** and **regional context** in mind:

  * **Logistics Ready:** Tailored for the Bangladesh market with specific shipping tiers for Dhaka and Nationwide delivery.
  * **Clean Code:** Prioritized modularity and separation of concerns, making it easy to integrate a backend or AI recommendations in the future.
  * **User Retention:** Included a persistent "Contact" footer on every page to build trust and provide instant support via WhatsApp/Phone.

-----

## ⚙️ How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Mohiuuddin/shopping-cart.git](https://github.com/Mohiuuddin/ShoppingCart.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```

-----

## 👨‍💻 Author

**Mohiuuddin** *ICT Professional & Full-Stack Developer* [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/mohiuddin777) | [GitHub](https://github.com/Mohiuuddin)

-----

*Developed with a focus on optimized state management and modern React patterns.*

```

---

```
