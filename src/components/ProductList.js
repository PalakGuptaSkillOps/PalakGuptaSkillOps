import React from 'react';

const ProductList = () => {
  const products = [...Array(10)].map((_, idx) => ({
    id: idx,
    title: `Product ${idx + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;