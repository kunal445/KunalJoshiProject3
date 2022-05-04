// styles
import './App.css';

import { Route, Routes } from 'react-router-dom';
import GameDetails from './Componenents/GameDetails';
import Homepage from './Componenents/Homepage';
import Footer from './Componenents/Footer';


//#region PsudoCode
// ---------------------------------psudo code -----------------------------
// MVP- react app

// description: make api call to mmobomb api and display the results

// setup useEffect hook to perform the api call once the page is loaded
// use the proxy server to perform the network call to the api
// create a state to store all the games as an array of objects

// create a component to display the game objects
// pass the state into the component via props

// - filter the loaded data using the user input
// then create a new array with the filtered games 
// display the results

// STRECH GOALS
// - use firebase to add games to the favorites list
// - let the user search for a specific game by text input
//#endregion

function App() {

  


  return (
    <div className="App">
      <h1 id='home'>Welcome to <a href="/" className='logo'>MMOHunter</a></h1>
      
      <Routes>
        <Route path='/' element = {<Homepage />}/>
        <Route path='/games/:GameID' element={<GameDetails/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
