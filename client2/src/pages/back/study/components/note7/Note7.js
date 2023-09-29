import { Component } from 'react'
import './Note7.css'

export default class Note7 extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglipuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  }

  render () {
    const hand1 = []
    const hand2 = [...this.props.pokemon]

    while (hand1.length < hand2.length) {
      const randIdx = Math.floor(Math.random() * hand2.length)
      const randPokemon = hand2.splice(randIdx, 1)[0]
      hand1.push(randPokemon)
    }

    const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    )
  }
}

class Pokedex extends Component {
  render () {
    let title

    if (this.props.isWinner) {
      title = <h1 className='Pokedex-winner'>Winning Hand</h1>
    } else {
      title = <h1 className='Pokedex-loser'>Losing Hand</h1>
    }

    return (
      <div className='Pokedex'>
        {title}
        <h4>Total experience: {this.props.exp}</h4>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map((p, idx) => (
            <Pokecard
              key={idx}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    )
  }
}

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const padToThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number

class Pokecard extends Component {
  render () {
    const imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`

    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{this.props.name}</h1>
        <div className='Pokecard-img'>
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className='Pokecard-data'>Type: {this.props.type}</div>
        <div className='Pokecard-data'>EXP: {this.props.exp}</div>
      </div>
    )
  }
}
