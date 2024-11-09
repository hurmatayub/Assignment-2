import React from 'react';
import './Products.css';

const products = [
  { id: 1, name: 'Potato (new born)', price: 99, image: '/images/potato.webp' },
  { id: 2, name: 'Tomato', price: 60, image: '/images/tomato.webp' },
  { id: 3, name: 'Onion', price: 195, image: '/images/onion.webp' },
  { id: 4, name: 'Carrot', price: 118, image: '/images/carrot.webp' },
  { id: 5, name: 'Coriander (Bunch)', price: 20, image: '/images/coriander.webp' },
  { id: 6, name: 'Mint (Bunch)', price: 30, image: '/images/mint.webp' },
  { id: 7, name: 'Spinach', price: 98, image: '/images/spinach.webp' },
  { id: 8, name: 'Lemon', price: 134, image: '/images/lemon.webp' },
  { id: 9, name: 'Curry leaves', price: 15, image: '/images/curry.webp' },
  { id: 10, name: 'Soya Leaves (Bunch)', price: 40, image: '/images/soya.webp' },
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3 className="product-name">{product.name}</h3>
    <p className="product-price">RS: {product.price}</p>
    <button className="add-to-cart-button">Add to Cart</button>
  </div>
);

const Products = () => {
  return (
    <section className="products">
      <h2 className="products-title">OUR PRODUCT</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
