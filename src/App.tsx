import { useState } from "react"
import words from "./wordlist.json"
import Keyboard from "./Keyboard";
import HangmanWord from "./HangmanWord";
import HangmanDrawing from "./HangmanDrawing";

function App() {
const [wordToGuess, setWordToGuess] = useState(() => {
  return words[Math.floor(Math.random() * words.length)]
});

const [guessedLetters, setGuessedLetters] = useState<string[]>([])
console.log(wordToGuess)
  return (
  <div className="flex  items-center max-w-[800px] flex-col gap-8 mx-0 my-auto">
<div className="text-3xl text-center">Lose Win</div>
<HangmanDrawing />
<HangmanWord />
<Keyboard />
  </div>
  
    )

}

export default App
