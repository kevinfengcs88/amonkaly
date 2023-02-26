import logo from './logo.svg';
import './GamePage.css';
import React, {useState} from 'react'
import { GameCard } from './components/GameCard';

function GamePage() {

  let player = [];

  const [toggleOn, setToggleOn] = useState(false);

  const handleClickPile = () => {
    const table = document.getElementById("table");

    const newCardDiv = table.appendChild(document.createElement("div.card.card-player"));

    const newCard = newCardDiv.appendChild(document.createElement("GameCard"));

    console.log(table.children);
    console.log(newCardDiv.children);
    console.log(newCard);

    console.log(document.getElementById('p1'));
    console.log(document.getElementById('p2'));
    console.log(document.getElementById('p3'));
    console.log(document.getElementById('p4'));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="h2">Game Room</h2>
        <div className="table" id="table" z='1'>
          <div className='card card-p1'><GameCard/></div>
          <div className='card card-p2'><GameCard/></div>
          <div className='card card-p3'><GameCard/></div>

          <div className='card card-player' id='p1' z-index='2'><GameCard/></div>
          <div className='card card-player' id='p2' z-index='3'><GameCard/></div>
          <div className='card card-player' id='p3' z-index='4'><GameCard/></div>
          <div className='card card-player' id='p4' z-index='5'><GameCard/></div>

          <div className='card card-pile' onClick={handleClickPile}><GameCard cardType='pile'/></div>
        </div>
      </header>

    </div>
  );
}

export default GamePage;