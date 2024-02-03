type HangManWordProps = {
  guessedLetters: string[]
  wordToGuess: string
} 

export default function HangmanWord({guessedLetters, wordToGuess}: HangManWordProps) {
  return (
    <div className="flex font-semibold font-serif gap-4 text-6xl uppercase">
      {wordToGuess.split("").map((letter, index) => (
            <span className="border-b-4 border-black " key={index}>
              <span style={{visibility: guessedLetters.includes(letter) ? "visible": "hidden"}}>
              {letter} 
                </span></span>
      ))}
    </div>
  )
}
