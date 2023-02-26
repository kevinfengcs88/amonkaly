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
            {/*<p> Welcome to <span style={{ color:"#ff8c00", fontWeight:"bold" }}> Amonkaly </span> hello</p>*/}

            <svg viewBox="0 0 500 150">
                <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                <text width="500">
                <textPath xlinkHref="#curve">
                    Welcome to Amonkaly
                </textPath>
                </text>
            </svg>

            <Link to="/GamePage">
                <button className="joinButton" onClick={() => {
                    setToggleOn(!toggleOn)
                    console.log(toggleOn)
                    }}> Join Game 
                </button>
            </Link>
            <button className="roomButton" onClick={() => {
                console.log(toggleOn)
                }}> Join Room 
            </button>
            
    <input
        type="text"
        id="room-ID"
        onChange={handleChange}
        value={message}
        autoComplete="off"
    />

    <h2>Room ID: {message}</h2>

        </header>
    </div>
    )
}

export default Home;