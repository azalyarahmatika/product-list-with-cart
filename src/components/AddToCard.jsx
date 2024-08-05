import { useState } from 'react';
import PropTypes from 'prop-types';
import cart from '../../public/images/icon-add-to-cart.svg';
import increment from '../../public/images/icon-increment-quantity.svg';
import decrement from '../../public/images/icon-decrement-quantity.svg';
import '../styles/index.css';

function AddToCard({ menu, handleInputCartItems, handleDeleteCartItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isIncrementHovered, setIsIncrementHovered] = useState(false);
  const [isDecrementHovered, setIsDecrementHovered] = useState(false);
  const [qty, setQty] = useState(0);

  function handleIncrement() {
    setQty(qty + 1);
    handleInputCartItems(menu)
  }

  function handleDecrement() {
    qty>0 ? setQty(qty-1): '';
    handleDeleteCartItem(menu)
  }

  return(
    <div className='w-40 h-10 font-redhat bg-white border rounded-full overflow-hidden border-red absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 items-center justify-center'
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}>

      {!isHovered && (
        <div className='flex gap-2 w-full h-full justify-center items-center'>
        <img src={cart} alt="Cart Icon" />
        <p className='text-sm font-semibold'>Add to Cart</p>
      </div>
      )}

      {isHovered && (
        <div className='flex gap-5 w-full h-full justify-between items-center bg-red px-3'>
          <div className='border border-white h-4 w-4 rounded-full flex justify-center items-center hover:bg-white cursor-pointer group'
          onMouseEnter={() => setIsDecrementHovered(true)} 
          onMouseLeave={() => setIsDecrementHovered(false)}
          onClick={()=> handleDecrement()}>
            <img  className={`${isDecrementHovered ? 'custom-filter' : ''} `} src={decrement} alt="decrement" />
          </div>
          <p className='text-sm text-white'>{qty}</p>
          <div className='border border-white h-4 w-4 rounded-full flex justify-center items-center hover:bg-white cursor-pointer group'
          onMouseEnter={() => setIsIncrementHovered(true)} 
          onMouseLeave={() => setIsIncrementHovered(false)}
          onClick={()=> handleIncrement()}>
            <img className={`${isIncrementHovered ? 'custom-filter' : ''} `} src={increment} alt="Increment" />
          </div>
        </div>
      )}
      
    </div>
  )
}

AddToCard.propTypes = {
  menu: PropTypes.object.isRequired,
  handleInputCartItems: PropTypes.func,
  handleDeleteCartItem: PropTypes.func
}

export default AddToCard;