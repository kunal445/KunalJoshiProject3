import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const GameDetails = () => {
    const { GameID } = useParams();

    const [game, setGame] = useState([])

    useEffect(() => {
        const proxiedUrl = `https://www.mmobomb.com/api1/game?id=${GameID}`;
        const url = new URL('https://proxy.hackeryou.com');
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
                Object.keys(game).length === 0? "looks like something went wrong!" : 
                <section className="details">
                    <div className="mainInfo">
                        <div className="leftDiv">
                            <img src={game.thumbnail} alt={game.short_description} />
                        </div>
                        <div className="rightDiv">
                            <h2>{game.title}</h2>
                            <h3>Developer: {game.developer}</h3>
                            <a href={`${game.game_url}`} target="_blank" rel="noreferrer" className="gameLink">Play Now!</a>
                        </div>
                    </div>
                        <p>{game.short_description}</p>
                        <div className="requirements">
                        <h3 className="minRequirements">Minumum Requirements</h3>
                        <p>{game.minimum_system_requirements.graphics}</p>
                        <p>RAM: {game.minimum_system_requirements.memory}</p>
                        <p>OS: {game.minimum_system_requirements.os}</p>
                        <p>{game.minimum_system_requirements.processor}</p>
                        <p>HD: {game.minimum_system_requirements.storage}</p>
                        </div>
                </section>
            }
        </>
        
        
    )
}

export default GameDetails