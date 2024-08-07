import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import YourCart from "./components/YourCart";
import OrderConfirmed from "./components/OrderConfirmed";

function App() {
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [confirmOrder, setConfirmOrder] = useState(false);

  const uniqueCartItems = cartItems.reduce((acc, item) => {
    const foundItem = acc.find(cartItem => cartItem.name === item.name);
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

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

  function handleDeleteCartItem(itemName) {
    setCartItems(prevCartItems => {
      const index = prevCartItems.findIndex(item => item.name === itemName);
      if (index !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems.splice(index, 1);
        return updatedCartItems;
      }
      return prevCartItems;
    });
  }

  function handleConfirmOrder() {
    setConfirmOrder(true);
  }
  
  function handleNewOrder() {
    setCartItems([]);
    setConfirmOrder(false);
  }

  return (
    <>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <div className="flex bg-rose_50 justify-between relative max-w-7xl mx-auto">
        <div className="py-20 pl-24">
          <h1 className="text-3xl font-bold font-redhat mb-5 text-rose_900">Desserts</h1>
          <Cards menus={menus} handleInputCartItems={handleInputCartItems} handleDeleteCartItem={handleDeleteCartItem} uniqueCartItems={uniqueCartItems}/>
        </div>
        <div className="relative">
          <YourCart cartItems={cartItems} uniqueCartItems={uniqueCartItems} onDeleteItem={onDeleteItem} handleConfirmOrder={handleConfirmOrder}/>
        </div>
        

        <OrderConfirmed uniqueCartItems={uniqueCartItems} confirmOrder={confirmOrder} handleNewOrder={handleNewOrder} />
      </div>
    )}
  </>
  )
}

export default App;
