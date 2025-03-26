import "./App.css"
import { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";

function App() {
  const categories = ["Networking Equipment", "Phone Accessories", "Best Sellers"];
  const [search, setSearch] = useState("");
  const products = [
    { id: 1, name: "Wi-Fi Router", price: "$50", image: "/images/router.jpg" },
    { id: 2, name: "Ethernet Cable", price: "$10", image: "/images/ethernet.jpg" },
    { id: 3, name: "Wireless Earbuds", price: "$30", image: "/images/earbuds.jpg" }
  ];
  

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">TechStore</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-lg p-2 pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-2 top-3 w-4 h-4 text-gray-500" />
          </div>
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </header>

      {/* Categories */}
      <div className="flex gap-4 my-6">
        {categories.map((category) => (
          <button key={category} className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 transition">
            {category}
          </button>
        ))}
      </div>

      {/* Featured Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center shadow-md">
            <img src={product.image} alt={product.name} className="h-40 mb-4" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
