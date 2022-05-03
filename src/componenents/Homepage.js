// modules
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from '../firebase'
// components 
import DisplayGames from './DisplayGames';
import Form from './Form';
import DisplayFirebaseGames from './DisplayFirebaseGames';

const Homepage = () => {
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
    
    setFilteredGames(newGames);
  }

    return (
        <div>
            {/* <h1>Welcome to MMOHunter</h1> */}
            <Form  getGames = {getGames}/>
            <DisplayFirebaseGames savedGames = {dbGames} />
            <DisplayGames games = {filteredGames.length === 0 ? allGames : filteredGames} />
        </div>
    )
}

export default Homepage;