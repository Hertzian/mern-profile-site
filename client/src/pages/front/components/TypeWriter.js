import { useState, useEffect } from "react"

function TypeWriter({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentTypedText, setCurrentTypedText] = useState('')
  const wordsArray = words.split(', ')

  useEffect(() => {
    const typeNextWord = async () => {
      if (currentWordIndex < wordsArray.length) {
        const word = wordsArray[currentWordIndex]

        for (let i = 0; i <= word.length; i++) {
          setCurrentTypedText(word.substring(0, i))
          await new Promise((res) => setTimeout(res, 100))
        }

        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length)
      }
    }

    const intervalId = setInterval(typeNextWord, 2000)

    return () => clearInterval(intervalId)
  }, [currentWordIndex, words, wordsArray])

  return (
    <p className="section__subtitle section__subtitle--intro txtType" >
      {currentTypedText}.
    </p>
  )
}

export default TypeWriter