import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img src={item.image} alt={item.title} className="w-full h-48 object-contain mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-green-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;