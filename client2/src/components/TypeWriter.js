import { Component } from 'react'
import Typewriter from 'typewriter-effect'

class TypeWriter extends Component {
  render () {
    const words = this.props.words && this.props.words.split(', ')

    return (
      <div className='section__subtitle section__subtitle--about txtType'>
        {words && (
          <Typewriter
            options={{
              loop: true,
              skipAddStyles: true
            }}
            onInit={(typewriter) => {
              words.map((p) =>
                typewriter
                  .pauseFor(300)
                  .typeString(p)
                  .deleteChars(p.length)
                  .start()
              )
            }}
          />
        )}
      </div>
    )
  }
}

export default TypeWriter
