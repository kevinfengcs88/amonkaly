import './GamePage.css';
import React, {useState} from 'react'
import { GameCard } from './components/GameCard';
import { io } from 'socket.io-client';


const socket = io('http://localhost:5000');

const GamePage = () => {
  const [toggleOn, setToggleOn] = useState(false);

  socket.on('connect', () => {
    socket.emit('socket-connection-event', socket.id);
  });

  const player = 1;

  const [p1, setP1] = useState([]);
  const [p2, setP2] = useState([]);
  const [p3, setP3] = useState([]);
  const [p4, setP4] = useState([]);

  //const players = [p1,p2,p3,p4];

  const handleClickPile = () => {
    socket.emit('deck-click-event', 'Deck was clicked');

    const newCard = Math.floor(Math.random() * 5);
    switch (player) {
      case 1:
        setP1(p1 => [...p1, newCard]);
        break;
      case 2:
        setP2(p2 => [...p2, newCard]);
        break;
      case 3:
        setP3(p3 => [...p3, newCard]);
        break;
      case 4:
        setP4(p4 => [...p4, newCard]);
        break;
    }
  }

  const handleClickCard = () => {
    setP1(p1 => p1.slice(0,-1));
    //console.log(player);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h2 className="h2">Game Room</h2>
        <div className="table" id="table" z='1'>
            <div className='card card-p1' onClick={handleClickCard}><GameCard/></div>
            
            <div className='card card-p2' onClick={handleClickCard}><GameCard/></div>
            
            <div className='card card-p3' onClick={handleClickCard}><GameCard/></div>

            {p1.map((cardSymbol) => (
                <div className='card card-player' id={p1.length} z-index={p1.length+10}>
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