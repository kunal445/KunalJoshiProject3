import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [userInput, setUserInput] = useState('')

    const handleUserInput = (e) => {
        console.log(e.target.value);
    }

    return (
            <form action="">
                <select 
                id='genre' 
                name='genre'
                onChange={(e)=>{handleUserInput(e)}}
                >
                    Selected your genre
                    <option value='MMORPG'>MMORPG</option>
                    <option value='Shooter'>Shooter</option>
                    <option value='Racing'>Racing</option>
                    <option value='CardGame'>Card Game</option>
                    <option value='Social'>Social</option>
                    <option value='Strategy'>Strategy</option>
                    <option value='Sports'>Sports</option>
                    <option value='MOBA'>MOBA</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Fighting'>Fighting</option>
                    <option value='MMO'>MMO</option>
                    </select>
            </form>
    )
}

export default Form