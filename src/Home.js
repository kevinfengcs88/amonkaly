import React, {useState} from 'react'
import { Link } from 'react-router-dom';



function Home(){
    const [toggleOn, setToggleOn] = useState(false);
    const [message, setMessage] = useState('');
  
    const handleChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleClick = () => {
      console.log(message);
    };
   
    return(
        <div className="App">
        <header className="App-header">
            <h1 className="h1">Welcome to Amonkaly</h1>
            <Link to="/GamePage">
                <button className="joinButton" onClick={() => {
                    setToggleOn(!toggleOn)
                    console.log(toggleOn)
                    }}> Join Game 
                </button>
            </Link>
            
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autocomplete="off"
      />

      <h2>Message: {message}</h2>

      <button onClick={handleClick}>Log</button>
        </header>
      </div>
    )
}

export default Home;