import React from 'react'


function TodoList(props) {
  return (
    <li className="list_item">
    {props.item}
    <span className='icons'>
    <i className="fa fa-trash" 
    onClick={e=>{
        props.deleteItem(props.index)
    }}></i>
    </span>
</li>
  )
}

export default TodoList