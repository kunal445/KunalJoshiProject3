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
            {
                savedGames.map(game => {
                    return (
                        <div key={game.id} className='game'>
                            <h2>{game.data.title}</h2>
                            <img src={game.data.thumbnail} alt={game.data.short_description} />
                            <button onClick={() => {removeGame(game.id)}} className="removeButton">X</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DisplayFirebaseGames