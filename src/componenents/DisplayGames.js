import React from 'react'
import {getDatabase, ref, push} from 'firebase/database'
// config
import firebase from '../firebase'
import { Link } from 'react-router-dom'

const displayGames = ({games}) => {
    //#region states
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    //#endregion

    // adds the selected game to firebase
    const handleUserInput = (e, gameToAdd) => {
        e.preventDefault();
        push(dbRef, gameToAdd);
        alert(`${gameToAdd.title} has been added`)
    }

    return (
        <ul className='searchResults'>
            {
                games.map(game => {
                    return (
                        <li key={game.id} className='game'>
                            <Link to={`/games/${game.id}`} className='resultLink'>
                            <h2>{game.title}</h2>
                            <h3>Genre: {game.genre}</h3>
                            <img src={game.thumbnail} alt={game.short_description} />
                            <button onClick={(e) => {handleUserInput(e, game)}}>Add this game</button>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default displayGames