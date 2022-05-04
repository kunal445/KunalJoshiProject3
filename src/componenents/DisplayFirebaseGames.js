import React from 'react'
import firebase from '../firebase'
import { getDatabase, ref , remove } from 'firebase/database'
import { useState } from 'react'

const DisplayFirebaseGames = ({savedGames}) => {
    //#region states
    const [ShowGames, setShowGames] = useState(false)
    //#endregion

    // function to remove games from firebase
    const removeGame = (gameID) => {
        const database = getDatabase(firebase);
        const removeDBRef = ref(database, `/${gameID}`)
        remove(removeDBRef);
    }

    return (
        <>
            {/* a toogle feature using states to show saved games*/}
            <button onClick={()=> setShowGames(!ShowGames)
            } className = 'firebaseShowButton'>My List</button>

            <ul className='firebaseGames'>
                {
                    // conditonal render to only show games when the user clicks on the button to see their saved games
                    ShowGames === false ? null : 
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
            </ul>
        </>
    )
}

export default DisplayFirebaseGames