import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400
     text-black rounded-xl mb-4'>Tailwind CSS</h1>

      <Card texy = 'Hammad'/>
      <Card texy = 'Raza Khan' />

    </>
  )
}

export default App
