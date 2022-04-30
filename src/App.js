// modules
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from './firebase'
// styles
import './App.css';
// components 
import DisplayGames from './componenents/DisplayGames';
import Form from './componenents/Form';
import DisplayFirebaseGames from './componenents/DisplayFirebaseGames';

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

  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([])
  const [dbGames, setDBGames] = useState([]) ; 
  // this code will run once on page load
  useEffect(() => {
    //#region api call
    // using this proxy server because of cors error with the api
    const proxiedUrl = 'https://www.mmobomb.com/api1/games';
    const url = new URL('http://proxy.hackeryou.com');
    url.search = new URLSearchParams({
      reqUrl: proxiedUrl,
    });

    fetch(url)
    .then(response => response.json())
    .then(data => {
      // setting the data as a state
      setAllGames(data);
      
    });
    //#endregion

    //#region firebase
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    // getting all the current games in the database
    onValue(dbRef, (response) => {
      // and object of objects (need to turn this into an array of objects)
      const dbData = response.val()
      const dbGamesArray = [];

      for (const key in dbData) {
        dbGamesArray.push({id: key, data: dbData[key]})
      }

      setDBGames(dbGamesArray);
    })
    //#endregion
  }, [])

  const getGames = (e, userChoice) => {
    e.preventDefault();
    
    const copyOfAllGames = [...allGames];
    
    const newGames = copyOfAllGames.filter((game)=>{
      return game.genre === userChoice;
    });
    console.log(newGames);
    
    setFilteredGames(newGames);
    // console.log(filteredGames);
  }

// console.log(allGames);

  return (
    <div className="App">
      <h1>Welcome to MMOHunter</h1>
      <Form  getGames = {getGames}/>
      <h2>these games are from firebase</h2>
      <DisplayFirebaseGames savedGames = {dbGames} />
      <h2>these are the games from api</h2>
      <DisplayGames games = {filteredGames} />
    </div>
  );
}

export default App;
