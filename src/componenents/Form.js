import React from 'react'
import { useState } from 'react'

const Form = ({getGames}) => {
    const [userInput, setUserInput] = useState('placeholder')

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }

    return (
            <form onSubmit={(e) => {getGames(e, userInput)}}>
                <select 
                id='genre' 
                name='genre'
                onChange={(e)=>{handleUserInput(e)}}
                value = {userInput}
                >
                    Selected your genre
                    <option value='placeholder' disabled >Browse by Genres</option>
                    <option value='MMORPG'>MMORPG</option>
                    <option value='Shooter'>Shooter</option>
                    <option value='Racing'>Racing</option>
                    <option value='Card Game'>Card Game</option>
                    <option value='Social'>Social</option>
                    <option value='Strategy'>Strategy</option>
                    <option value='Sports'>Sports</option>
                    <option value='MOBA'>MOBA</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Fighting'>Fighting</option>
                    <option value='MMO'>MMO</option>
                    </select>
                    <button>Search</button>
            </form>
    )
}

export default Form