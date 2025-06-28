/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {useTodo} from '../Contexts'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return 

    addTodo({todo, completed:false })
    setTodo("")
  }
    

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 
                bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button
            type="submit"
             className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                    >   
                        <svg class="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
                             
                Add
            </button>
        </form>
    );
}

export default TodoForm;

