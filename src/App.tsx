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

const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
console.log(wordToGuess)
  return (
    <div className="w-[100vw] h-[100vh] m-0 p-0 flex justify-center items-center">

    
  <div className="flex items-center justify-center max-w-[800px] flex-col gap-8 mx-0 my-auto">
<div className="text-3xl text-center">Lose Win</div>
<HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>
<HangmanWord />
<div style={{alignSelf: "stretch", width: "60vw"}}>
<Keyboard />
</div>

  </div>
  </div>
  
    )

}

export default App
