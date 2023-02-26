import logo from './logo.svg';
import './GamePage.css';
import React, {useState} from 'react'
import { GameCard } from './components/GameCard';

function GamePage() {
  const [toggleOn, setToggleOn] = useState(false);

  const handleClickPile = () => {

    const newCardDiv = document.createElement("div");
    const newCard = document.createElement("GameCard");
    newCardDiv.class = 'card card-player';
    document.body.appendChild(newCardDiv);
    newCardDiv.appendChild(newCard);
    console.log('new card created');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="h2">Game Room</h2>
        <div className="table" id="table">
          <div className='card card-p1'><GameCard/></div>
          <div className='card card-p2'><GameCard/></div>
          <div className='card card-p3'><GameCard/></div>
          <div className='card card-player'><GameCard/></div>
          <div className='card card-pile' onClick={handleClickPile}><GameCard cardType='pile'/></div>
        </div>
      </header>

    </div>
  );
}

export default GamePage;