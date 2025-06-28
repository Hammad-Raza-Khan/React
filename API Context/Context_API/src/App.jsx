import { useState } from 'react'
import './App.css'
import login from './components/login'
import profile from './components/profile'
import usercontextprovider from './context/usercontextprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <usercontextprovider>
      <h1>Api Context</h1>
      <login/>
      <profile/>
    </usercontextprovider>
  )
}

export default App
