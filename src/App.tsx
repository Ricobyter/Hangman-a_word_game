import { useCallback, useEffect, useState } from "react"
import words from "./wordlist.json"
import {Keyboard} from "./Keyboard";
import HangmanWord from "./HangmanWord";
import HangmanDrawing from "./HangmanDrawing";
import { IoIosRefresh } from "react-icons/io";

function App() {

const [wordToGuess, setWordToGuess] = useState(() => {
return words[Math.floor(Math.random() * words.length)]
setWordToGuess(''); // This line is unreachable
});

const [guessedLetters, setGuessedLetters] = useState<string[]>([])

const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))


const isLoser = incorrectLetters.length >= 6
const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

const addGuessedLetter = useCallback((letter: string) =>{
  if(guessedLetters.includes(letter) || isLoser || isWinner) return

  setGuessedLetters(currentLetters => [...currentLetters, letter])
}, [guessedLetters, isLoser, isWinner])


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

const refresh = () => window.location.reload()
  return (
    // <div className='w-[100vw] h-[100vh] m-0 p-0 flex justify-center items-center'>
    <div className={`w-[100vw] h-full md:h-[100vh] m-0 p-0 flex justify-center items-center bg-white`}>

      {/* <div className={`${isLoser} && ? bg-red-700 : bg-green-300`}></div> */}

  <div className="flex items-center justify-center max-w-[800px] flex-col gap-8 mx-0 my-auto">
<div className="text-3xl text-center">
  <span className="text-green-400 text-2xl font-serif font-medium">{isWinner && "You Won. Refresh to try again"} </span>
  
  <span className="text-red-700 text-2xl font-serif font-medium">{isLoser && "Oops! It seems that you lost. Refresh to try again"} </span>
  
  
</div >
<div className="flex  flex-col-reverse gap-3 md:gap-2 md:flex-row items-center">

<button className="bg-green-500 text-white rounded-xl font-semibold px-2 py-1  flex items-center gap-2" onClick={refresh}>Refresh <IoIosRefresh/></button>
<HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>
</div>
<HangmanWord reveal ={isLoser} guessedLetters = {guessedLetters} wordToGuess = {wordToGuess}/>
<div className="flex justify-center w-[100vw]">
<div style={{alignSelf: "stretch"}} className="keyboard w-[95vw] sm:w-[70vw] md:w-[60vw]" >
<Keyboard  disabled={isWinner || isLoser}
activeLetters={guessedLetters.filter(letter =>
  wordToGuess.includes(letter))}
  inactiveLetters={incorrectLetters}
  addGuessedLetter={addGuessedLetter}/>
  
</div>
  </div>

  </div>
  </div>
  
    )

}

export default App
