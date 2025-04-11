import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">SKU: {product.sku}</p>
          <p className="text-xl font-semibold text-green-600 mt-2">KSh {product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
