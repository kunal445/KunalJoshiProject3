import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const GameDetails = () => {
    const { GameID } = useParams();

    const [game, setGame] = useState([])

    useEffect(() => {
        const proxiedUrl = `https://www.mmobomb.com/api1/game?id=${GameID}`;
        const url = new URL('http://proxy.hackeryou.com');
        url.search = new URLSearchParams({
        reqUrl: proxiedUrl,
        });

    fetch(url)
    .then(response => response.json())
    .then(data => {
      // setting the data as a state
        setGame(data);
    });

    }, [GameID])

    return (
        <>
            {
                Object.keys(game).length === 0? "hi" : 
                <div>
                        <h2>{game.title}</h2>
                        <img src={game.thumbnail} alt={game.short_description} />
                        <h2>{game.developer}</h2>
                        <p>{game.short_description}</p>
                        <a href={`${game.game_url}`} target="_blank" rel="noreferrer">Play Now!</a>
                        <div>
                        <h3>Minumum Requirements</h3>
                        <p>{game.minimum_system_requirements.graphics}</p>
                        <p>RAM: {game.minimum_system_requirements.memory}</p>
                        <p>{game.minimum_system_requirements.os}</p>
                        <p>{game.minimum_system_requirements.processor}</p>
                        <p>{game.minimum_system_requirements.storage}</p>
                        </div>
                    </div>
            }
        </>
        
        
    )
}

export default GameDetails