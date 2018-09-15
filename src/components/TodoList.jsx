import React from 'react'
import './todolist.scss'

const TodoList =(props) => (
  <ul id="todo-container-wrappper">
    {props.todos.map( todo => (
      <li key={todo.id}>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button onClick={() => props.removeItem(todo)}>Remove</button>
      </li>
    ) )}
  </ul>
)
export default TodoList
