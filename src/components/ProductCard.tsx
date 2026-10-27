import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="product-price">₹{product.price.toLocaleString("en-IN")}</p>
      <p>{product.inStock ? "In stock" : "Currently unavailable"}</p>
      <button disabled={!product.inStock} onClick={() => onAddToCart(product)}>
        Add To Cart
      </button>
    </article>
  );
}

export default ProductCard;
