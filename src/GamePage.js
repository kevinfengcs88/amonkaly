import logo from './logo.svg';
import './GamePage.css';
import React, {useState} from 'react'
import { GameCard } from './components/GameCard';
import { io } from 'socket.io-client';

function GamePage() {
  const [toggleOn, setToggleOn] = useState(false);

  const socket = io('http://localhost:5000');

  socket.on('connect', () => {
    socket.emit('socket-connection-event', socket.id);
  });

  const handleClickPile = () => {
    socket.emit('deck-click-event', 'Deck was clicked');
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