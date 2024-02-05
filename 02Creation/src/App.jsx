import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 5;
  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
  }

  const subValue = () => {
    if(counter>=1){
      setCounter(counter - 1)
    }else{
      console.log("can't subtract now! ");
    }
  }
  return (
    <>
      <h1>THIS IS MY TESTING...</h1><br/><br/>
      <h1>this is the value of counter: {counter}</h1>
      
      <button onClick={addValue}>Add Value</button>
      <br/><br/>
      <button onClick={subValue}>Sub Value</button>

    </>
  )
}

export default App
