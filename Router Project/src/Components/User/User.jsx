import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-black text-white text-3xl px-4 font-mono'>User: {userid}</div>
  )
}

export default User