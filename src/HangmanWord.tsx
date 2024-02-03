export default function HangmanWord() {
  const word = "test"
  const guessedLetters: string[] = ["t", "t"]
  return (
    <div className="flex font-semibold font-serif gap-4 text-6xl uppercase">
      {word.split("").map((letter, index) => (
            <span className="border-b-4 border-black " key={index}>
              <span style={{visibility: guessedLetters.includes(letter) ? "visible": "hidden"}}>
              {letter} 
                </span></span>
      ))}
    </div>
  )
}
