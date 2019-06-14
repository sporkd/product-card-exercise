import React from 'react';
import Product from './Product';
import './Products.css';

const Products = ({ filteredProducts }) => {
  return (
    <div className="Products-grid">
      {filteredProducts.map(product =>
        <Product key={product.variantId} product={product} />
      )}
    </div>
  );
};

export default Products;
