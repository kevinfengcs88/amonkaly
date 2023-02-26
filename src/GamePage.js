import logo from './logo.svg';
import './GamePage.css';
import React, {useState} from 'react'
import { GameCard } from './components/GameCard';

function GamePage() {
  const [toggleOn, setToggleOn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="h2">Game Room</h2>
        <div className="table">
          <div class='card card-p1'><GameCard/></div>
          <div class='card card-p2'><GameCard/></div>
          <div class='card card-p3'><GameCard/></div>
          <div class='card card-player'><GameCard/></div>
          <div class='card card-pile'><GameCard cardType='pile'/></div>
        </div>
      </header>

    </div>
  );
}

export default GamePage;