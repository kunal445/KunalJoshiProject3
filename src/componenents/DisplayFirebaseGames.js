import React from 'react'

const DisplayFirebaseGames = ({savedGames}) => {
    return (
        <>
            {
                savedGames.map(game => {
                    return (
                        <div key={game.data.id} className='game'>
                            <h2>{game.data.title}</h2>
                            <img src={game.data.thumbnail} alt={game.data.short_description} />
                            <h2>Genre: {game.data.genre}</h2>
                            <h2>Platform: {game.data.platform}</h2>
                            <h2>Developer: {game.data.developer}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DisplayFirebaseGames