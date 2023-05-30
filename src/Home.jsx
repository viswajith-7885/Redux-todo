import React, { useRef } from 'react'
import {  addtodo,removetodo } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
    const nav =useNavigate()
    const myreff =useRef(null)
    const dispatch =useDispatch()
    const todolist = useSelector((state)=>state.todo)
    console.log(todolist);

    const addHandle=()=>{
        const activity =myreff.current.value
        dispatch(addtodo({id:Date.now(),activity}))
        myreff.current.value = ' '     
    }
    const removeHandle =(e)=>{
        const pid =parseInt(e.target.id)
        dispatch(removetodo({
            id:pid
        }))
    }

  return (
    <div>

    <input  ref={myreff}/>
    <button onClick={addHandle}>add</button>
    <ul>
    {todolist.map((e)=>(

        <li>{e.activity} <button onClick={()=>nav(`/edit/${e.id}`)}>edit</button><button id={e.id} onClick={removeHandle}>delete</button></li>
    ))}
    </ul>
    </div>
  )
}

export default Home