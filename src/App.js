import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(33);
  const increaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props) {
  return
}

export default App;


// const products = [
//   { name: 'laptop', price: 90000 },
//   { name: 'phone', price: 22000 },
//   { name: 'watch', price: 5000 },
//   { name: 'tablet', price: 35000 },
// ]


{/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="Laptop" price="47000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="3500"></Product> */}

      // <div className='product'>
    //   <h3>Name: {props.name}</h3>
    //   <p>Price: {props.price}</p>
    // </div>