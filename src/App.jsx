import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import YourCart from "./components/YourCart";

function App() {
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // console.log(menus)
  return (
    <>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
        <Cards menus={menus} />
        <YourCart />
      </>
    )}
  </>
  )
}

export default App;
