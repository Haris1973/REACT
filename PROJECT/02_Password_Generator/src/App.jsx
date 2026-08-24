import { useState , useCallback, useEffect, useRef } from "react"

function App() {
  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [Pass , setPass] = useState("");

  const passGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*(){}[]~"

      for(let i = 1 ; i<= length ; i++) {
          let char = Math.floor(Math.random() * str.length + 1);
          pass += str.charAt(char);
      }
      setPass(pass);

  } , 
  [length , numAllowed , charAllowed])

  const passRef = useRef(null);

  const copypasstoclipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(Pass);
  } , [Pass])

  useEffect(() => passGenerator() , [length , numAllowed , charAllowed ,passGenerator])

 return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      
      <div className="w-full max-w-lg rounded-2xl bg-gray-800 p-6 shadow-2xl">
        
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Password Generator
        </h1>

        <div className="flex overflow-hidden rounded-lg border border-gray-600">
          
          <input
            type="text"
            value={Pass}
            className="w-full bg-gray-700 px-4 py-3 text-white outline-none placeholder:text-gray-400"
            placeholder="Your password"
            readOnly
            ref={passRef}
          />

          <button 
          onClick={copypasstoclipboard}
          className="bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 cursor-pointer">
            Copy
          </button>

        </div>

        <div className="flex text-sm gap-x-7 mt-5">
            <div className="flex items-center gap-x-1">
              <input 
              type="range" 
              min={8}
              max={30}
              value={length}
              className="cursor-pointer"
              id="range-input"
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label className="text-white font-semibold" htmlFor="range-input">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"  
              id="numAllowed"
              defaultChecked={numAllowed}
              className="cursor-pointer"
              onChange={() => {setNumAllowed((e) => !e)}}
              />
              <label className="text-white font-semibold" htmlFor="numAllowed">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"  
              id="charAllowed"
              defaultChecked={charAllowed}
              className="cursor-pointer"
              onChange={() => {setCharAllowed((e) => !e)}}
              />
              <label className="text-white font-semibold" htmlFor="charAllowed">Characters</label>
            </div>                        
        </div>

      </div>

    </div>
  </>
)
}

export default App
