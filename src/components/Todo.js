import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';
import { addTodo, deleteTodo, editTodo } from '../action/index';

const Todo = () => {

const [inputData, setInputData]= useState('');
const list= useSelector((state)=> state.reducer.list);
const dispatch= useDispatch();

  return (
    <>
      <div className='main-div bg-gray-600 min-h-screen flex items-center justify-center'>
         <div className='child-div p-8 bg-white shadow-md rounded-md w-96'>
            <h1 className="h1 font-bold text-blue-700 place-items-center mb-4">TODO APP</h1>
            <figure>
                <figcaption className=' font-bold text-sm text-gray-900'>Add Your List Here</figcaption>
            </figure>

            <div className='mt-4'>
                <input type='text' placeholder='Add Items....'
                value={inputData} onChange={(event)=>setInputData(event.target.value)}/>

                <button className='add-btn bg-green-600 text-white px-4 py-2 mt-2 rounded-md' onClick={()=>dispatch(addTodo(inputData),
                    setInputData('')) }>Add</button>
            </div>

            <div className='list mt-4 space-y-4'>

                {
                    list.map((element)=>{
                    return(
                    <div className='each-list bg-gray-300 p-3 rounded-md flex items-center justify-between' key={element.id}>
                        
                    {element.isEditing ? (
                    <input
                    type='text'
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)}/>) : (
                    <h3 className='text-xl text-purple-800'>{element.data}</h3>
                    )}
                    
                    <div className='todo-btn'>
                    <button className='delete-btn text-red-800' title='deleteItem' 
                    onClick={()=>dispatch(deleteTodo(element.id)) }>Delete</button>
                    </div>

                    <div className='todo-btn'>
                    <button className='edit-btn text-red-800' title='editItem' 
                    onClick={()=>dispatch(editTodo(element.id, prompt(element.isEditing))) }>Edit</button> 
                    </div>
                    </div>
                    )

                    })
                }   

            </div>

         </div>
      </div>
    </>
  )
}

export default Todo;
