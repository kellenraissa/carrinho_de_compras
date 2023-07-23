import { useEffect } from 'react';
import './App.css';
import { Product } from './ProductList/Product';
import { getShoppingCar, setShoppingCar } from './ProductList/Product.service';
import { ShoppingCar } from './Pages/CarPage/ShoppingCar';
import { useState } from 'react';
import { CarHeader } from './Pages/CarPage/CarHeader';
import { CarTotal } from './Pages/CarPage/CarTotal';

function App() {

  const [itensShoppingCar, setItensShoppingCar] = useState([]);

  useEffect(()=> {
    const itens = getShoppingCar();

    setItensShoppingCar(itens);
  }, []);

  const removeItemCar = (item, index) => {
    const itemIndex = itensShoppingCar?.findIndex(element => item.name === element.name);

    if(itemIndex !== -1) {
      itensShoppingCar[itemIndex].quantity = 1;
      const lista = [...itensShoppingCar];
      lista.splice(index, 1);
      setItensShoppingCar(lista)
      setShoppingCar(lista);
    }
  }

  const addItemToCar = (item) => {
    const itemIndex = itensShoppingCar?.findIndex(element => item.name === element.name);

    if(itemIndex !== -1) {
      itensShoppingCar[itemIndex].quantity += 1;
      const lista = [...itensShoppingCar];
      setItensShoppingCar(lista)
      setShoppingCar(lista);
      
    } else {
      const lista = [...itensShoppingCar, item];
    
      setShoppingCar(lista)
      setItensShoppingCar(lista);
    }

  }

  const subtractQuantityToCar = (item) => {
    const itemIndex = itensShoppingCar?.findIndex(element => item.name === element.name);

    if(itemIndex !== -1) {
      if(itensShoppingCar[itemIndex].quantity > 1){
        itensShoppingCar[itemIndex].quantity -= 1;

        const lista = [...itensShoppingCar];
        setItensShoppingCar(lista)
        setShoppingCar(lista);
      }else {
        removeItemCar();
      }
    } else {
      const lista = [...itensShoppingCar, item];
    
      setShoppingCar(lista)
      setItensShoppingCar(lista);
    }

  }

  const getTotal = () => {
    let sum = 0;
     console.log("getTotal")
    for (let item of itensShoppingCar) {
      sum += item.price * item.quantity;
    }
    return sum;
  }

  const carTotal = getTotal();
   
  return (
    <div className="App">
      <Product addItemToCar={addItemToCar} />
      <div className="ShoppingCar">
        <CarHeader/>
        <div className="ShoppingCarBody">
          <ShoppingCar itensShoppingCar={itensShoppingCar} setItensShoppingCar={setItensShoppingCar} addItemToCar={addItemToCar} removeItemCar={removeItemCar} subtractQuantityToCar={subtractQuantityToCar}/>
        </div>
        <CarTotal total={carTotal}/>  
      </div>
    </div>
    
  );
}

export default App;
