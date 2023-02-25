import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import GamePage from './GamePage';

function App() {
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
