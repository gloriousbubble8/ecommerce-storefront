import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import type { CartItem, Product } from "./types/product";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function handleAddToCart(product: Product): void {
    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return previousCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previousCart, { product, quantity: 1 }];
    });
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="storefront">
      <header className="store-header">
        <a className="store-brand" href="/">
          ShopSphere
        </a>

        <nav aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </nav>

        <button type="button" className="cart-button">
          Cart ({cartCount})
        </button>
      </header>

      <section className="hero-section">
        <p className="eyebrow">YOUR EVERYDAY STORE</p>
        <h1>Find something you love.</h1>
        <p className="hero-description">
          Discover useful products for your everyday life.
        </p>
        <a className="shop-button" href="#products">
          Explore products
        </a>
      </section>

      <section id="products" className="products-section">
        <h2>Featured products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <footer id="about" className="store-footer">
        ShopSphere — Built with React and TypeScript.
      </footer>
    </main>
  );
}

export default App;
