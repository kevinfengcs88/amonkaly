import logo from './logo.svg';
import './GamePage.css';
import React, {useState} from 'react'
import { GameCard } from './components/GameCard';
import { io } from 'socket.io-client';

function GamePage() {

  const [player, setPlayer] = useState([]);

  const socket = io('http://localhost:5000');

  socket.on('connect', () => {
    socket.emit('socket-connection-event', socket.id);
  });

  const handleClickPile = () => {
    socket.emit('deck-click-event', 'Deck was clicked');

    const newCard = Math.floor(Math.random() * 5);
    setPlayer(player => [...player, newCard]);
  }

  const handleClickCard = () => {
    setPlayer(player => player.slice(0,-1));
    console.log(player);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h2 className="h2">Game Room</h2>
        <div className="table" id="table" z='1'>
            <div className='card card-p1'><GameCard/></div>
            <div className='card card-p2'><GameCard/></div>
            <div className='card card-p3'><GameCard/></div>
            {console.log(player)}
            {player.map((cardSymbol) => (
                <div className='card card-player' id={player.length} z-index={player.length+10} onClick={handleClickCard}>
                  <GameCard symbol={cardSymbol}/>
                </div>
            ))}

            <div className='card card-pile' onClick={handleClickPile}><GameCard cardType='pile'/></div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;