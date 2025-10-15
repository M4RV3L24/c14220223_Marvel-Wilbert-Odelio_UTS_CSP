import { useCart } from '../context/CartContext';
import ProductTitle from './ProductTitle';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
              <img src={item.image} alt={item.title} className="w-full h-48 object-contain mb-4" />
              <ProductTitle product={item} />
              <div className="mt-auto">
                <div className='flex justify-start items-center mt-auto mb-2 pt-3'>
                  <p className="text-md font-semibold text-black bg-amber-200 px-4 py-1.5 rounded-xl">Quantity: {item.quantity}</p>
                  <p className="text-md font-bold ms-2 text-amber-50 bg-green-600 px-4 py-1.5 rounded-xl">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-auto"
                >
                  Remove from Cart
                </button>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;