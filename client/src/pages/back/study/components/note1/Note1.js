import { Component } from 'react'

export default class Note1 extends Component {
  render() {
    return (
      <div>
        <Hello
          emojis={[
            '\u{1f605}',
            '\u{1f606}',
            '\u{1f607}',
            '\u{1f608}',
            '\u{1f609}'
          ]}
          to='Maroma'
          from='Lalo'
          num={3}
          bangs={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          img='https://media.tenor.com/images/9dd9f756d3704de25874dcb354161122/tenor.gif'
          //img='nada'
        />
        <Hello to='Britney' from='Adele' bangs={10} isFunny />
      </div>
    )
  }
}

class Hello extends Component {
  render() {
    //console.log(this.props)
    let bangs = '!'.repeat(this.props.bangs)

    return (
      <div>
        <p>
          Hi {this.props.to} from {this.props.from} {bangs}
        </p>
        <img src={this.props.img} alt='note1' />
        <p>{this.props.emojis}</p>
      </div>
    )
  }
}
