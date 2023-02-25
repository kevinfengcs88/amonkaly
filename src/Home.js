import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Home(){
    const [toggleOn, setToggleOn] = useState(false);
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

        </header>
      </div>
    )
}

export default Home;