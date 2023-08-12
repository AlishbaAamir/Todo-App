import { useState } from 'react'
import Todoinput from './Component/Todoinput'
import TodoList from './Component/TodoList'
import './App.css'

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  

  return (
    <>
     <div className="container_fluid">
     <h3 className='heading' >Todo-List</h3>
      <Todoinput addList={addList}/>
      {listTodo.map((listItem,i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
     
     </div>
    </>
  )
}

export default App
