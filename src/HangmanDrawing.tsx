const Head = (
  <div className="w-[50px] h-[50px] border-black border-[8px] absolute top-[50px] right-[-20px] rounded-[100%] "/>
)
const Body = (
  <div className="w-[8px] h-[80px] bg-black absolute top-[100px] right-[0px]"/>
)
const rightArm = (
  <div className="w-[60px] h-[8px] bg-black absolute top-[130px] right-[-60px]"/>
)
const leftArm = (
  <div className="w-[60px] h-[8px] bg-black absolute top-[130px] right-[8px] "/>
)
const rightLeg = (
  <div className="w-[60px] h-[8px] bg-black absolute top-[172px] right-[-60px] "/>
)
const leftLeg = (
  <div className="w-[60px] h-[8px] bg-black absolute top-[172px] right-[8px] "/>
)

const bodyParts = [Head, Body, rightArm, leftArm, leftLeg, rightLeg]

type HangManDrawingProps ={
  numberOfGuesses : number
}

export default function HangmanDrawing({numberOfGuesses}: HangManDrawingProps) {
  return (
    <div className="relative">
      {bodyParts.slice(0, numberOfGuesses)}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[350px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />

    </div>
  )
}
