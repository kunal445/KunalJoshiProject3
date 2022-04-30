import React from 'react'
import {getDatabase, ref, onValue, push, remove} from 'firebase/database'
// config
import firebase from '../firebase'

const displayGames = ({games}) => {

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    const handleUserInput = (e, gameToAdd) => {
        e.preventDefault();
        console.log("added ",gameToAdd.title);
        push(dbRef, gameToAdd)
    }

    return (
        <>
            {
                games.map(game => {
                    return (
                        <div key={game.id} className='game'>
                            <h2>{game.title}</h2>
                            <img src={game.thumbnail} alt={game.short_description} />
                            <h2>Genre: {game.genre}</h2>
                            <h2>Platform: {game.platform}</h2>
                            <h2>Developer: {game.developer}</h2>
                            <button onClick={(e) => {handleUserInput(e, game)}}>Add this game</button>
                        </div>
                    )
                })
            }

        </>
    )
}

export default displayGames