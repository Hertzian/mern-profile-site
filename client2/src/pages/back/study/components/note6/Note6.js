import { Component } from 'react'

export default class Note6 extends Component {
  render () {
    const select = choice(fruits)
    const fruitsLeft = remove(fruits, select)

    return (
      <div>
        <p>{select}</p>
        <p>I'd linke one {select}, please.</p>
        <p>Here you go: {select}</p>
        <p>Delicious! May I have another?</p>
        <p>I'm sorry, we're all out. We have {fruitsLeft} other fruits left.</p>
      </div>
    )
  }
}

const fruits = [
  '\u{1F347}',
  '\u{1F348}',
  '\u{1F349}',
  '\u{1F34A}',
  '\u{1F34B}',
  '\u{1F34C}',
  '\u{1F34D}',
  '\u{1F96D}',
  '\u{1F34E}',
  '\u{1F34F}',
  '\u{1F350}',
  '\u{1F351}',
  '\u{1F352}',
  '\u{1F353}',
  '\u{1F95D}',
  '\u{1F345}',
  '\u{1F965}',
  '\u{1F965}'
]

const choice = (items) => {
  const rand = Math.floor(Math.random() * items.length)
  return items[rand]
}

const remove = (items, item) => {
  const index = items.indexOf(item)
  const result = items.splice(index, 1)

  if (!result.length) return undefined
  return items.length
}
