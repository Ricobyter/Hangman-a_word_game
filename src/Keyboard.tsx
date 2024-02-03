const KEYS: string[] = [
  "a"  ,  "b"   , "c"   , "d" ,   "e"   , "f"   , "g"  ,  "h" ,   "i"  ,  "j"    ,"k"  ,  "l" ,   "m",    "n",    "o",    "p",    "q",    "r",    "s",    "t",    "u",    "v",    "w",    "x",    "y",    "z"
]

export default function Keyboard() {
  return (
    <div className="grid gap-1" style={{gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", justifySelf:"center"}}>
      {KEYS.map(key => {
        return(
          <button className="p-3 text-2xl font-serif uppercase hover:bg-orange-500 focus:bg-orange-500 border-2 border-black rounded-md" key={key}>{key}</button>
        )
      })}
    </div>
  )
}
