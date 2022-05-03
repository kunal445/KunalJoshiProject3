import React from 'react'
import {getDatabase, ref, push} from 'firebase/database'
// config
import firebase from '../firebase'
import { Link } from 'react-router-dom'

const displayGames = ({games}) => {

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    const handleUserInput = (e, gameToAdd) => {
        e.preventDefault();
        console.log("added ",gameToAdd.title);
        push(dbRef, gameToAdd)
    }

    return (
        <ul className='searchResults'>
            {
                games.map(game => {
                    return (
                        <li key={game.id} className='game'>
                            <Link to={`/games/${game.id}`}>
                            <h2>{game.title}</h2>
                            <h3>Genre: {game.genre}</h3>
                            <img src={game.thumbnail} alt={game.short_description} />
                            {/* <h2>Developer: {game.developer}</h2> */}
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