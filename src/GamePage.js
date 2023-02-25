import logo from './logo.svg';
import './GamePage.css';
import React, {useState} from 'react'

function GamePage() {
  const [toggleOn, setToggleOn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">Game Room</h1>
        <div className="table">
        </div>
      </header>

    </div>
  );
}

export default GamePage;