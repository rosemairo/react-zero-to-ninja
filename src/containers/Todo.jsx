import React, { Component } from 'react'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import Portal from '../containers/portals/Portal'
import './todo.scss'

class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      todo: {
        title: '',
        description: ''
      },
      error: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

    

  handleChange (e) {
    const name = e.target.name
    const todo = this.state.todo
    todo[name] = e.target.value
    this.setState({ todo, error: false })
  }

  handleSubmit (e) {
    e.preventDefault()

    const { title, description } = this.state.todo

    if (title.trim().length === 0 || description.trim().length === 0) {
      this.setState({ error: true })
      setTimeout(() =>{
        this.setState({
          error: "",
        })
      }, 1000);
    } else {
      const newItem = {
        title,
        description,
        id: Date.now()
      }

      this.setState(prevState => ({
        todos: [...prevState.todos, newItem],
        title: '',
        description: ''
      }))
    }
  }

  removeItem (todo) {
    const todoItems = this.state.todos.filter(todos => todos.id !== todo.id)

    this.setState({ todos: todoItems })
  }

  render () {
    return (
      <div id="todo-container-wrappper">
        <TodoForm 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} 
        title={this.state.todo.title}
        description={this.state.todo.description}
        />
        {this.state.error && (
          <span className="error"> You cannot enter an empty todo </span>
        )}
        {this.state.todos.length > 0 && (
          <div>
            <TodoList todos={this.state.todos} removeItem={this.removeItem} />
            <Portal>
            <h1>i am a portal</h1>
          </Portal>
          </div>
        )}
      </div>
    )
  }
}

export default Todo
