type HangManWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal ?: boolean
} 

export default function HangmanWord({guessedLetters, wordToGuess, reveal= false}: HangManWordProps) {
  return (
    <div className="flex font-semibold font-serif gap-4 text-6xl uppercase">
      {wordToGuess.split("").map((letter, index) => (
            <span className="border-b-4 border-black " key={index}>
              <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible": "hidden", 
              color: !guessedLetters.includes(letter) && reveal ? "red" : "black"}}>
              {letter} 
                </span></span>
      ))}
    </div>
  )
}
