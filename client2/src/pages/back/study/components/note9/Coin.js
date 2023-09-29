import { Component } from 'react'

class Coin extends Component {
  render () {
    return (
      <div className='Coin'>
        {
          // <img src={this.props.info.imgSrc} alt={this.props.info.side} />
        }
        <h2>{this.props.info.side}</h2>
      </div>
    )
  }
}

export default Coin
