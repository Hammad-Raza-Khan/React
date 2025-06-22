import { useState } from "react"

function App() {
    const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

        <div className="fixed top-0 right-0 h-full flex flex-col items-center justify-center space-y-4 p-4 bg-white/30 backdrop-blur-sm shadow-lg">

          <button onClick={()=>setColor('red')} className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "red" }} />
          <button onClick={()=>setColor('green')} className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "green" }} />
          <button onClick={()=>setColor('blue')} className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "blue" }} />
          <button onClick={()=>setColor('yellow')} className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "yellow" }} />
          <button onClick={()=>setColor('purple')} className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "purple" }} />
          <button onClick={()=>setColor('orange')} className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "orange" }} />
          <button onClick={()=>setColor('pink')} className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "pink" }} />
          <button onClick={()=>setColor('teal')} className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "teal" }} />
          <button onClick={()=>setColor('black')} className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "black" }} />

        </div>

      </div>
    </>
  )
}

export default App
