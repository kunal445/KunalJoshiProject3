import React from 'react'
import firebase from '../firebase'
import { getDatabase, ref , remove } from 'firebase/database'

const DisplayFirebaseGames = ({savedGames}) => {
    const removeGame = (gameID) => {
        const database = getDatabase(firebase);
        const removeDBRef = ref(database, `/${gameID}`)
        remove(removeDBRef);
    }
    return (
        <>
            <button>Click to see your saved games</button>

        <div className='firebaseGames'>
            {
                savedGames.map(game => {
                    return (
                        <li key={game.id} className='game2'>
                            <h2>{game.data.title}</h2>
                            <img src={game.data.thumbnail} alt={game.data.short_description} />
                            <button onClick={() => {removeGame(game.id)}} className="removeButton">X</button>
                        </li>
                    )
                })
            }
        </div>
        </>
    )
}

export default DisplayFirebaseGames