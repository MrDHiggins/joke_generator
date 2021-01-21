import { useState,useRef } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {

  //useRef => Point useRef at an element to provide appropriate ref
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null);

  const [fName, setFName] = useState("Dyllan");
  const [lName, setLName] = useState("Higgins");

  const joke = useRandomJoke(fName, lName);

  //custom hook
  const generateJoke = (e) =>{
    e.preventDefault();
    setFName(firstNameRef.current.value);
    setLName(lastNameRef.current.value);
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
            ref={firstNameRef}/>

          {/*Last Name Input*/}
          <input
            type="text" 
            placeholder="last Name"
            ref={lastNameRef}/>
        </form>

        <button onClick={generateJoke}>Generate Joke</button>
      </center>

    </div>
  );
}

export default App;
