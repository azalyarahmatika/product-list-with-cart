import PropTypes from 'prop-types';
import Card from "./Card";

function Cards({ menus }) { 
  return (
    <div className='grid grid-cols-3 w-2/3 gap-5'>
      {menus.map((menu, index) => (
        <Card key={index} menu={menu} /> 
      ))}
    </div>
  );
}

Cards.propTypes = {
  menus: PropTypes.array,
}

export default Cards;
