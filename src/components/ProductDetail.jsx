import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.title} className="w-full h-96 object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Category:</span> {product.category}</p>
            <p className="text-2xl font-bold text-green-600">${product.price}</p>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;