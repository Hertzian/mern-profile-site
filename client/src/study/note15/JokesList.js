import { Component } from 'react'
import axios from 'axios'
import { v4 } from 'uuid'
import Joke from './Joke'
import './JokesList.css'

class JokesList extends Component {
  static defaultProps = { numJokesToGet: 10 }

  constructor(props) {
    super(props)
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      loading: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.seenJokes = new Set(this.state.jokes.map((j) => j.text))
    console.log(this.seenJokes)
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes()
    }
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes)
  }

  async getJokes() {
    try {
      let jokes = []
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' }
        })
        let newJoke = res.data.joke
        if (!this.seenJokes.has(newJoke)) {
          jokes.push({ id: v4(), text: res.data.joke, votes: 0 })
        } else {
          console.log('found a duplicate!')
          console.log(newJoke)
        }
      }
      this.setState(
        (st) => ({ loading: false, jokes: [...st.jokes, ...jokes] }),
        () =>
          window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      )
    } catch (err) {
      console.log(err)
      this.setState({ loading: false })
    }
  }

  handleVote(jokeId, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === jokeId ? { ...j, votes: j.votes + delta } : j
        )
      }),
      () =>
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    )
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='JokesList-spinner'>
          <i className='far fa-8x fa-laugh fa-spin'></i>
          <h1 className='JokesList-ti'>Loading...</h1>
        </div>
      )
    }

    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes)

    return (
      <div className='JokesList'>
        <div className='JokesList-sidebar'>
          <h1 className='JokesList-title'>
            <span>Dad</span> Jokes
          </h1>
          <img
            className='JokesList-sidebar'
            src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
            alt=''
          />
          <button className='JokesList-getmore' onClick={this.handleClick}>
            Fetch Jokes
          </button>
        </div>

        <div className='JokesList-jokes'>
          {jokes.map((joke) => (
            <Joke
              key={joke.id}
              votes={joke.votes}
              text={joke.text}
              upvote={() => this.handleVote(joke.id, 1)}
              downvote={() => this.handleVote(joke.id, -1)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default JokesList
