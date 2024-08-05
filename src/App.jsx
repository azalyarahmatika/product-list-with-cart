import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import YourCart from "./components/YourCart";

function App() {
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('../src/assets/data.json')
      .then(response => response.json())
      .then(data => {
        setMenus(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  function handleInputCartItems(newItem) {
    setCartItems(prevCartItems => [...prevCartItems, newItem]);
  }

  function onDeleteItem(itemName) {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.name !== itemName));
  }

  function handleDeleteCartItem() {

  }

  return (
    <>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <div className="flex bg-rose_50 p-24 justify-between">
        <Cards menus={menus} handleInputCartItems={handleInputCartItems} handleDeleteCartItem={handleDeleteCartItem}/>
        <YourCart cartItems={cartItems} onDeleteItem={onDeleteItem}/>
      </div>
    )}
  </>
  )
}

export default App;
