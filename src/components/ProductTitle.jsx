import { Link } from 'react-router-dom';

const ProductTitle = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="text-lg font-semibold text-blue-600 hover:text-blue-800 block mb-2">
      {product.title}
    </Link>
  );
};

export default ProductTitle;