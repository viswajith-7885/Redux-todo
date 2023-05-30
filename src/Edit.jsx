import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateData } from './UserReducer'

function Edit() {
    const dispatch =useDispatch()
    const {id}=useParams()
    const list =useSelector((state)=>state.todo)
    const filterList =list.filter((e)=>e.id===parseInt(id))
    const myreff = useRef(null)
    const nav =useNavigate()

    const sumitHandle= ()=>{
        const val =myreff.current.value 
        dispatch(UpdateData({
            activity:val,
            id:id
        }))
        nav('/')
    }
  return (
    <div>
    {filterList.map((e)=>(
        <input ref={myreff} type="text" defaultValue={e.activity}/>
         ))}
        <button onClick={sumitHandle}>submit</button>
    </div>
  )
}

export default Edit