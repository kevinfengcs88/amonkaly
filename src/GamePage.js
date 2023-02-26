import './GamePage.css';
import React, {useState} from 'react'
import { GameCard } from './components/GameCard';
import { io } from 'socket.io-client';
import { Link } from 'react-router-dom';
const word_list = ['percussion instrument', 'asian city', 'famous cowboy', 'shade of green', 'asian religion', 'secondary color', 'actress', 'pianist', 'sundae topping', 'country musician', 'rain gear', 'first aid item', 'wonder of the world', 'type of puzzle', 'pirate', 'construction vehicle', 'hip hop artist', 'Brady Bunch character', 'type of rock', 'explosion sound', 'primate', 'spider', 'flightless bird', 'vacation spot', 'French city', 'WWF wrestler', 'middle eastern city', 'famous vehicle', 'direction', 'crustacean', 'type of government', 'cat food brand', 'novel', 'carnivorous animal', 'famous puppet', 'cough drop brand', '70s tv show', 'baseball player', 'atomic particle', 'town', 'Elvis song', 'Harry Potter book', 'science fiction author', 'watch brand', 'soap opera', 'Halloween costume', 'potato chip flavor', 'legume', 'chess piece', 'type of crime', 'medical occupation', 'white food', 'energy drink', 'unit of energy', 'county', 'winter sport', 'boulevard', 'comic book', 'cooking method', 'cake ingredient', 'tv mini-series', 'federal holidary', 'playground game', 'prime number', 'horned animal', 'college', 'fashion magazine', 'South American country', 'football team', 'Latin American author', 'pen brand', 'Goddess'];

const socket = io('http://localhost:5001');
var curTurn = 1;

const GamePage = () => {
  const [toggleOn, setToggleOn] = useState(false);
  
  socket.on('connect', () => {
    socket.emit('socket-connection-event', socket.id);
  });
  
  const [p1, setP1] = useState([]);
  const [p2, setP2] = useState([]);
  const [p3, setP3] = useState([]);
  const [p4, setP4] = useState([]);

  const handleClickPile = () => {

    const newWord = word_list[Math.floor(Math.random() * word_list.length)];
    const newCard = Math.floor(Math.random() * 5);

    console.log('new card' + newCard);
    switch (curTurn) {
      case 1:
        console.log('setting now' + newCard);
        console.log([...p1, newCard]);
        setP1([...p1, [newWord, newCard]]);
        console.log(p1);
        curTurn = 2;
        break;
      case 2:
        if (curTurn == 2) {
          setP2([...p2, [newWord, newCard]]);
          curTurn = 3;
        }
        break;
      case 3:
        if (curTurn == 3) {
          setP3([...p3, [newWord, newCard]]);
          curTurn = 4;
        }
        break;
      case 4:
        if (curTurn == 4) {
          setP4([...p4, [newWord, newCard]]);
          curTurn = 1;
        }
        break;
    }
    console.log('cur turn now: ' + curTurn);

    socket.emit('current-turn', curTurn);
  }

  const handleClickCard = (playerDeck) => {
    //console.log(curTurn);
    switch (playerDeck) {
      case 1:
        setP1((p1) => p1.slice(0,-1));
        break;
      case 2:
        setP2((p2) => p2.slice(0,-1));
        break;
      case 3:
        setP3((p3) => p3.slice(0,-1));
        break;
      case 4:
        setP4((p4) => p4.slice(0,-1));
        break;
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className='flex-box'>
          <Link style={{textDecoration: "none", flexBasis: "10vw", padding: "10px"}} to="/">
            <div style={{color: "#ff8c00" }} onClick={
              console.log("Player left")
            }>
              Leave Game
            </div>
          </Link>
          <h2 className="h2" style={{flexGrow: "0.845"}}>Game Room</h2>
        </div>
        <div className="table" id="table" z='1'>
            {p1.map((cardInfo, index) => (
              <div className='card card-p1' z-index={index+10} onClick={() => handleClickCard(1)}>
                <GameCard word={cardInfo[0]} symbol={cardInfo[1]}/>
              </div>
            ))}

            {p2.map((cardInfo, index) => (
              <div className='card card-p2' z-index={index+10} onClick={() => handleClickCard(2)}>
                <GameCard word={cardInfo[0]} symbol={cardInfo[1]}/>
              </div>
            ))}

            {p3.map((cardInfo, index) => (
              <div className='card card-p3' z-index={index+10} onClick={() => handleClickCard(3)}>
                <GameCard word={cardInfo[0]} symbol={cardInfo[1]}/>
              </div>
            ))}

            {p4.map((cardInfo, index) => (
              <div className='card card-p4' z-index={index+10} onClick={() => handleClickCard(4)}>
                <GameCard word={cardInfo[0]} symbol={cardInfo[1]}/>
              </div>
            ))}

            <div className='card card-pile' onClick={handleClickPile}><GameCard cardType='pile'/></div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;