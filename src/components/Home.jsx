import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Beauty and Luxury's Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <Link to={`/product/${product.id}`} className="text-lg font-semibold text-blue-600 hover:text-blue-800 block mb-2">
              {product.title}
            </Link>
            <p className="text-xl font-bold text-green-600 mb-4">${product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;