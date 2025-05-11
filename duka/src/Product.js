import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductPage() {
  const [products, setProducts] = useState([]);  // Store all products
  const [cart, setCart] = useState([]);  // Store cart items

  useEffect(() => {
    // Fetch all products
    axios.get("http://localhost:5000/api/admin/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
      
      if (existingProductIndex >= 0) {
        // If the product is already in the cart, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // If product is not in cart, add it
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Show loading if products are not loaded yet
  if (products.length === 0) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-green-600 font-bold">KSh {product.price}</p>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            <button 
              className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary (for demonstration purposes) */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item._id} className="flex justify-between mt-2">
              <span>{item.name} x {item.quantity}</span>
              <span>KSh {item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <span className="font-bold">Total: </span>
          <span>
            KSh {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
