import { Component } from 'react'
export default class Note4 extends Component {
  render() {
    return (
      <div>
        <Hello to='Ringo' from='Paul' bangs={4} />
        <Hello to='George' />
      </div>
    )
  }
}

class Hello extends Component {
  static defaultProps = {
    from: 'Anonimous',
    bangs: 1
  }

  render() {
    let bangs = '!'.repeat(this.props.bangs)

    return (
      <div>
        <p>
          Hi {this.props.to} from {this.props.from}
          {bangs}
        </p>
      </div>
    )
  }
}
