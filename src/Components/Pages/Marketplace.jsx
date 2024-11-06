import React,{useContext} from 'react';
import Fetched from '../../Hooks/Fetched';
import { Notification_context } from './Friends';

const ProductCard = ({ product }) => {
    const{notify,setNotify}=useContext(Notification_context);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <div className="button-group">
          <button className="buy-button" onClick={()=>setNotify([...notify,`You just bought ${product.title}`])}>Buy Now</button>
          <button className="cart-button" onClick={()=>setNotify([...notify,`You just added ${product.title} to your cart`])}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const MarketPlace = ({ data }) => {
  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h1>Marketplace</h1>
        <div className="filters">
          <select defaultValue="">
            <option value="" disabled>Category</option>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <input type="text" placeholder="Search products..." />
        </div>
      </div>
      <div className="products-grid">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default function MarketplacePage() {
  return (
    <div className="marketplace-page">
      <Fetched url={'https://fakestoreapi.com/products'} renderSuccess={MarketPlace} />
    </div>
  );
}