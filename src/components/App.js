import React, { useState, useEffect } from 'react'

import Pokemon from '../apis/pokemon'
import List from './List'

const App = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const test = async () => {
            const {data} = await Pokemon.get('pokemon', {
                params: {
                    limit: 20,
                    offset: 0
                }
            })
            setPokemons(data.results)
            //console.log(data)
        }
        
        test()
    }, [])

    return (
        <div>
           <List pokemons={pokemons} />
        </div>
    )
}

export default App;