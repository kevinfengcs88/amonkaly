import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React, {useState} from 'react'
import GamePage from './GamePage';

function App() {
  const [toggleOn, setToggleOn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/'/>
            <Route path='/GamePage' element={<GamePage/>}/>
        </Routes>
      </BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="h1">Welcome to Amonkaly</h1>
          <button className="joinButton" onClick={() => {
            setToggleOn(!toggleOn)
            console.log(toggleOn)
            }}> Join Game </button>
        </header>
      </div>
    </>
  );
}

export default App;
