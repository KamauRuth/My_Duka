import { useState } from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const categories = ['Networking Equipment', 'Phone Accessories', 'Best Sellers'];
  const [search, setSearch] = useState('');
  const products = [
    { id: 1, name: 'Wi-Fi Router', price: '$50', image: '/router.jpg' },
    { id: 2, name: 'Ethernet Cable', price: '$10', image: '/cable.jpg' },
    { id: 3, name: 'Wireless Earbuds', price: '$30', image: '/earbuds.jpg' }
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
          <Button key={category} variant="outline">
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="h-40 mb-4" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <Button className="mt-2">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}