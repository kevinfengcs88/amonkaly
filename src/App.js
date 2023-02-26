import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import GamePage from './GamePage';
import { io } from 'socket.io-client';

let socket = io();

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(()=> {
    socket.on('connect', () => {
      setIsConnected(true);
    });
  
    socket.on('disconnect', () => {
      setIsConnected(false);
    });
  
    console.log('Socket connection is: ' + isConnected);

    return ()=> {
      socket.off('connect');
      socket.off('disconnect');
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/GamePage' element={<GamePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
