import React, { useState } from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  const handleBookmark = (product) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push(product);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    alert(`${product.title} has been bookmarked!`);
  };

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} handleBookmark={handleBookmark} />
      ))}
    </div>
  );
};

export default ProductList;
