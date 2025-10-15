import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Layout = ({ children }) => {
  const { getCartCount } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/" className="flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
                Home
              </Link>
              <Link to="/cart" className="flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
                Cart {getCartCount() > 0 && <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{getCartCount()}</span>}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;