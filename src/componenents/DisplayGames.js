import React from 'react'

const displayGames = ({games}) => {
    return (
        <>
            {
                games.map(game => {
                    return (
                        <div key={game.id}>
                            <h2>{game.title}</h2>
                            <img src={game.thumbnail} alt={game.short_description} />
                        </div>
                    )
                })
            }

        </>
    )
}

export default displayGames