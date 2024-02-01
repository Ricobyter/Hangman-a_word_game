import { useState } from "react"
import words from "./wordlist.json"

function App() {
const [wordToGuess, setWordToGuess] = useState(() => {
  return words[Math.floor(Math.random() * words.length)]
});

const [guessedLetters, setGuessedLetters] = useState<string[]>([])
console.log(wordToGuess)
  return (
  <div style={{
    
  }}>

  </div>
  
    )

}

export default App
