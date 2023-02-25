import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [toggleOn, setToggleOn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">Welcome to Amonkaly</h1>
        <button className="joinButton" onClick={() => {
          setToggleOn(!toggleOn)
          console.log(toggleOn)
          }}> Join Game </button>
      </header>

    </div>
  );
}

export default App;
