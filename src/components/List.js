import React, { Component } from 'react'

class List extends Component{

    state = { pokemons: [] }

    renderList()  {
        return this.props.pokemons.map(pokemon => {
            return (
                <div key={pokemon.name} className='item'>
                     {pokemon.name}
                </div>
            )
        })
    }

    render() {
        return (
        <div className='ui relaxed divided list' >
            {this.renderList()}
        </div>
        )
    }

}

export default List