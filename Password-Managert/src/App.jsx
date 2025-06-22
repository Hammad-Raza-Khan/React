import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'
import { parse } from 'postcss'

function App() {

  const [length, setLength] = useState(8)
  const [char, setchar] = useState(false)
  const [num, setnum] = useState(false)
  const [passwords, setpasswords] = useState("")

  const passwordReference = useRef(null)


  const passwordGenerator = useCallback(
    ()=>{

      let pw = ''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      
      if (num) str += '1234567890'
      if (char) str+= '!@#$%^&*()~|}{[]'

      for (let i = 1; i <= length; i++) {
        const  siu = Math.floor(Math.random()*str.length + 1)
        pw += str.charAt(siu)
        
      }

      setpasswords(pw)



    }, [setpasswords, length, num, char])

    const copytoclip = useCallback(()=> {
      passwordReference.current?.select()
      passwordReference.current?.setSelectionRange(0,2);
      window.navigator.clipboard.writeText(passwords)
    }, [passwords])

    useEffect(()=>{passwordGenerator()}, [length, num, char, passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 to-orange-500 bg-gray-500">

    <h1 className="text-white text-center font-serif my-3" >PASSWORD GENERATOR</h1>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
    <input type="text"
    value={passwords}
    className='outline-none w-full py-1 px-3'
    placeholder='PASSWORD'
    readOnly
    ref={passwordReference}
    />

    <button
    onClick={copytoclip}
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
    </div>
    <div className="flex text-smg gap-x-2">
      <div className="flex items-center gap-x-1 text-orange-400">
        <input type="range"
        min={6}
        max={60}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={num}
        id='numb'
        onChange={()=>{
          setnum((prev)=>!prev)
        }}
        />
        <label>Numbers: {num}</label>
      </div>

      {/* --------------- */}

      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={char}
        id='numbs'
        onChange={()=>{
          setchar((prev)=>!prev)
        }}
        />
        <label>Characters: {char}</label>
      </div>

    </div>
    </div>
    </>
  )
}

export default App
