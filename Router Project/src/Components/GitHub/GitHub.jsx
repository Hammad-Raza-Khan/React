import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/Hammad-Raza-Khan')
    // .then(response => response.json())
    // .then(data=> {
    //     console.log(data);
    //     setdata(data)
        
    // })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>GitHub Followers: {data.followers} 
    <img src={data.avatar_url} alt="GitHub Followers" width={300} />
    </div>
  )
}

export default GitHub

export const githubinfoloader = async () =>{
        const response = await fetch('https://api.github.com/users/Hammad-Raza-Khan')
        return response.json()

}