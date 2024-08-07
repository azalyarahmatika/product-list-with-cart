import PropTypes from 'prop-types';
import Card from "./Card";

function Cards({ menus, handleInputCartItems, handleDeleteCartItem, uniqueCartItems }) { 
  return (
    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
      {menus.map((menu, index) => (
        <Card key={index} menu={menu} handleInputCartItems={handleInputCartItems} handleDeleteCartItem={handleDeleteCartItem} uniqueCartItems={uniqueCartItems} /> 
      ))}
    </div>
  );
}

Cards.propTypes = {
  menus: PropTypes.array,
  handleInputCartItems: PropTypes.func,
  handleDeleteCartItem: PropTypes.func,
  uniqueCartItems: PropTypes.array
}

export default Cards;
