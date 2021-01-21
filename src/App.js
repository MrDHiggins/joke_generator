import { useState,useRef } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {

  //useRef => Point useRef at an element to provide appropriate ref
  const firstNameRef = useRef(null)

  const [fName, setFName] = useState("Dyllan");

  const joke = useRandomJoke(fName);

  //custom hook
  const generateJoke = (e) =>{
    e.onKeyDown = 'Enter'
    e.preventDefault();
    setFName(firstNameRef.current.value);
  }

  const enterKeyDown = (e)=>{
    e.onKeyDown='Enter';
  }




  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>

        <h2>{joke}</h2>

        <form>
          {/*First Name Input*/}
          <input
            type="text" 
            placeholder="First Name"
            ref={firstNameRef}
            onKeyDown={enterKeyDown}/>
        </form>

        <button onClick={generateJoke}>Generate Joke</button>
      </center>

    </div>
  );
}

export default App;
