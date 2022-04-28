import React from 'react'

const displayGames = ({games}) => {
    return (
        <>
            {
                games.map(game => {
                    return (
                        <div key={game.id} className='game'>
                            <h2>{game.title}</h2>
                            <img src={game.thumbnail} alt={game.short_description} />
                            <h2>Genre: {game.genre}</h2>
                            <h2>Genre: {game.platform}</h2>
                            <h2>Developer: {game.developer}</h2>
                        </div>
                    )
                })
            }

        </>
    )
}

export default displayGames