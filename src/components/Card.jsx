import PropTypes from 'prop-types';
import { useState } from 'react';
import AddToCard from "./AddToCard";

function Card({ menu, handleInputCartItems, handleDeleteCartItem }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const imageUrl = (device) => `/images/${menu.images[device]}`;

  return (
    <div className='container overflow-hidden w-56 font-redhat'>
      {isLoading && (
        <div className="loading-indicator">
          <p>Loading image...</p>
        </div>
      )}
      
      <div className='h-52 relative'>
        <picture>
          <source srcSet={imageUrl('desktop')} media="(min-width: 1024px)" onLoad={handleImageLoad} />
          <source srcSet={imageUrl('tablet')} media="(min-width: 768px)" onLoad={handleImageLoad} />
          <source srcSet={imageUrl('mobile')} media="(max-width: 767px)" onLoad={handleImageLoad} />
          <img  className='w-full h-full object-cover rounded-lg' src={imageUrl('thumbnail')} alt={menu.name} onLoad={handleImageLoad} />
        </picture>
        <AddToCard menu={menu} handleInputCartItems={handleInputCartItems} handleDeleteCartItem={handleDeleteCartItem} />
      </div>
      
      {!isLoading && (
        <div className='mt-10'>
          <p className='text-xs text-rose_500'>{menu.category}</p>
          <p className="text-base text-rose_900 font-semibold">{menu.name}</p>
          <p className='text-sm font-semibold text-red'>${menu.price.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  menu: PropTypes.object.isRequired,
  handleInputCartItems: PropTypes.func,
  handleDeleteCartItem: PropTypes.func
}

export default Card;
