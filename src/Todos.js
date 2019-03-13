import React from 'react'
import './css.css'

const Todos = ({todos, deleteTodo, crossTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='list' key={todo.id} >
                    <span onClick={() => {crossTodo(todo.id)}} >{todo.content}</span>
                    <button className='cross' onClick={() => {deleteTodo(todo.id)}} >X</button>
                </div>
            )
        })
    ) : (
        <p></p>
    )
    return (
        <div>
            {todoList}<br/>
            Total Items : {todos.length}
        </div>
    )
}

export default Todos