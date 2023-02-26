import logo from './logo.svg';
import './GamePage.css';
import React, {useState} from 'react'
import { GameCard } from './components/GameCard';

function GamePage() {
  const [toggleOn, setToggleOn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">Game Room</h1>
        <div className="table">
          <div class='card card-p1'><GameCard/></div>
          <div class='card card-p2'><GameCard/></div>
          <div class='card card-p3'><GameCard/></div>
          <div class='card card-p4'><GameCard/></div>
        </div>
      </header>

    </div>
  );
}

export default GamePage;