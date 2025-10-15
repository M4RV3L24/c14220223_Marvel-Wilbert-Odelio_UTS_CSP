import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import ProductTitle from './ProductTitle';

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

  if (products.length === 0) return <div className="text-center">Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Beauty and Luxury's Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <ProductTitle product={product} />
            <div className='flex justify-between items-center mt-auto pt-3'>
              <p className="text-md font-bold text-white bg-green-600 px-4 py-1.5 rounded-xl">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                // className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-auto shadow-blue-3 transition duration-150 ease-in-out"
                className="inline-block rounded-xl bg-blue px-6 ml-3 pb-2 pt-2.5 w-full text-xs font-medium uppercase leading-normal text-white bg-blue-500 shadow-blue-3 transition duration-150 ease-in-out hover:bg-blue-accent-300 hover:shadow-blue-2 focus:bg-blue-accent-300 focus:shadow-blue-2 focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-blue-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
