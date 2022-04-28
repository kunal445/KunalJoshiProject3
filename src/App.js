import { useEffect, useState } from 'react';
import './App.css';
import DisplayGames from './componenents/DisplayGames';

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

  const [allGames, setAllGames] = useState([])

  // this code will run once on page load
  useEffect(() => {
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

  }, [])

console.log(allGames);

  return (
    <div className="App">
      <DisplayGames games = {allGames} />
    </div>
  );
}

export default App;
