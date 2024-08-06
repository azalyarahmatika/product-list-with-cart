import PropTypes from 'prop-types';
import Check from '../../public/images/icon-order-confirmed.svg';

function OrderConfirmed({ uniqueCartItems, confirmOrder }) {
  console.log(uniqueCartItems);
  const orderTotal = uniqueCartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

  return (
    confirmOrder && (
      <div className="fixed inset-0 flex justify-center items-center z-50 pt-10">
        <div className="bg-black opacity-60 absolute inset-0"></div>
        <div className="relative z-20 w-11/12 md:w-1/3 bg-white p-6 rounded-md font-redhat max-h-screen overflow-y-auto">
          <img src={Check} alt="Check Icon" className="w-10" />
          <h2 className="text-2xl font-bold pt-4 pb-1">Order Confirmed</h2>
          <p className="text-rose-500 text-sm pb-6">We hope you enjoy your food!</p>
          <div className="bg-rose-50 rounded-md px-5 py-4">
            {uniqueCartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-5 border-b">
                <div className="flex justify-between items-center gap-2 w-full">
                  <div className="flex items-center gap-3">
                    <img src={`/images/${item.images.thumbnail}`} alt={`${item.name} thumbnail`} className="w-14 h-14 object-cover rounded-md" />
                    <div className="flex flex-col text-xs">
                      <p className="font-semibold text-sm mb-1">{item.name}</p>
                      <div>
                        <p className="w-8 text-red font-bold inline">{item.quantity}x</p>
                        <p className="w-12 inline">@ ${item.price}</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-semibold py-4 text-rose-900">${(item.quantity * item.price).toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center py-4">
              <p className="text-sm">Order Total</p>
              <p className="font-bold text-xl">${orderTotal.toFixed(2)}</p>
            </div>
          </div>
          <button className="bg-red p-2 w-full rounded-full text-white text-sm font-semibold mt-6">Start New Order</button>
        </div>
      </div>
    )
  );
}

OrderConfirmed.propTypes = {
  uniqueCartItems: PropTypes.array.isRequired,
  confirmOrder: PropTypes.bool.isRequired
}

export default OrderConfirmed;
