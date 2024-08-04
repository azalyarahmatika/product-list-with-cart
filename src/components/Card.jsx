import PropTypes from 'prop-types';
import { useState } from 'react';
import AddToCard from "./AddToCard";

function Card({ menu }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const imageUrl = (device) => `/images/${menu.images[device]}`;

  return (
    <div className='container overflow-hidden w-60 font-redhat'>
      {isLoading && (
        <div className="loading-indicator">
          <p>Loading image...</p>
        </div>
      )}
      
      <div className='h-52'>
        <picture>
          <source srcSet={imageUrl('desktop')} media="(min-width: 1024px)" onLoad={handleImageLoad} />
          <source srcSet={imageUrl('tablet')} media="(min-width: 768px)" onLoad={handleImageLoad} />
          <source srcSet={imageUrl('mobile')} media="(max-width: 767px)" onLoad={handleImageLoad} />
          <img  className='w-full h-full object-cover rounded-lg' src={imageUrl('thumbnail')} alt={menu.name} onLoad={handleImageLoad} />
        </picture>
      </div>
      
      {!isLoading && (
        <div>
          <p className='text-xs'>{menu.category}</p>
          <p className="text-base font-semibold">{menu.name}</p>
          <p className='text-sm font-semibold text-red'>${menu.price.toFixed(2)}</p>
          <AddToCard />
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  menu: PropTypes.object.isRequired,
}

export default Card;
