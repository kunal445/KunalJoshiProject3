import React from 'react'

const Form = () => {
    return (
            <form action="">
                <select id='genre' name='genre'>Selected your genre
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