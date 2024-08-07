import PropTypes from 'prop-types';
import Close from '../../public/images/icon-remove-item.svg';
import CarbonNetral from '../../public/images/icon-carbon-neutral.svg';
import EmptyCart from '../../public/images/illustration-empty-cart.svg';

function YourCart({ cartItems, uniqueCartItems, onDeleteItem, handleConfirmOrder}) {  
  const itemCount = cartItems.length > 0 ? cartItems.length : 0;
  const orderTotal = uniqueCartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

  return(
    <div className='xl:w-80 font-redhat bg-white p-5 right-0 rounded-md h-fit my-20 lg:mr-24  overflow-auto max-h-[450px] custom-scrollbar'>
      <h2 className='text-red text-xl font-bold'>{`Your Cart (${itemCount})`}</h2>
      { !itemCount ? (
        <div className="flex flex-col items-center">
          <img className='mt-3' src={EmptyCart} alt="Empty Cart" />
          <p className='mt-2 text-xs text-rose_500 font-semibold'>Your added items will appear here</p>
        </div>
      ) : (   
      <div className=''>
        {uniqueCartItems.map((item, index)=>(
          <div key={index} className='flex justify-between items-center py-3 border-b'>
            <div>
              <p className='font-semibold text-sm mb-1'>{item.name}</p>
              <div className='flex text-xs'>
                <p className='w-8 text-red font-bold'>{item.quantity}x</p>
                <p className='w-12'>@ ${item.price}</p>
                <p className='text-rose-700 font-semibold'>${(item.quantity * item.price).toFixed(2)}</p>
              </div>
            </div>
            <div className='border w-fit p-[2px] rounded-full'>
              <img src={Close} alt="Remove Item" className='cursor-pointer' onClick={() => onDeleteItem(item.name)} />
            </div>
          </div>
        ))}

        <div className='flex justify-between my-5'>
          <p className='text-sm'>Order Total: </p>
          <p className='font-bold text-lg'>${orderTotal.toFixed(2)}</p>
        </div>

        <div className='flex items-center justify-center bg-rose_50 p-2 rounded-md text-xs'>
          <img src={CarbonNetral} alt="Carbon Neutral Icon" />
          <p>This is a <span className='font-semibold'>carbon-neutral</span> delivery</p>
        </div>

        <button className='bg-red rounded-full p-2 text-white mt-5 w-full text-sm font-semibold' onClick={()=>handleConfirmOrder()}>Confirm Order</button>
      </div>
    
      )}
    </div>
  )
}

YourCart.propTypes = {
  cartItems: PropTypes.array,
  uniqueCartItems: PropTypes.array,
  onDeleteItem: PropTypes.func,
  handleConfirmOrder: PropTypes.func
}

export default YourCart;