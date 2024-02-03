import { useCallback, useEffect, useState } from "react"
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

const addGuessedLetter = useCallback((letter: string) =>{
  if(guessedLetters.includes(letter)) return

  setGuessedLetters(currentLetters => [...currentLetters, letter])
}, [guessedLetters])

const isLoser = incorrectLetters.length >= 6
const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

console.log(wordToGuess)

useEffect(() => {
   const handler = (e: KeyboardEvent) => {
     const key = e.key

     if(!key.match(/^[a-z]$/)) return 

     e.preventDefault()
     addGuessedLetter(key)
   }
    
   document.addEventListener("keypress", handler)

   return () => {
    document.removeEventListener("keypress", handler)
   }
}, [guessedLetters])
  return (
    <div className="w-[100vw] h-[100vh] m-0 p-0 flex justify-center items-center">

    
  <div className="flex items-center justify-center max-w-[800px] flex-col gap-8 mx-0 my-auto">
<div className="text-3xl text-center">
  <span className="text-green-400">{isWinner && "You Won. Refresh to try again"}</span>
  <span className="text-red-700">{isLoser && "Oops! It seems that you lost. Refresh to try again"} </span>
  
</div>
<HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>
<HangmanWord guessedLetters = {guessedLetters} wordToGuess = {wordToGuess}/>
<div style={{alignSelf: "stretch", width: "60vw"}}>
<Keyboard activeLetter = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
inactiveLetters = {incorrectLetters}
addGuessedLetters = {addGuessedLetter}/>
</div>

  </div>
  </div>
  
    )

}

export default App
