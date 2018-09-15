import React, { Component } from 'react';

const TodoForm = props => (
    <form onSubmit={props.handleSubmit}
     id="todo-form">
          <label htmlFor="title" />
          <input
            id="title"
            name="title"
            value={props.title}
            placeholder="title"
            onChange={props.handleChange}
          />
          <label htmlFor="title" />
          <textarea
            id="description"
            name="description"
            value={props.description}
            placeholder="description"
            onChange={props.handleChange}
          />
          <button>Add Item</button>
        </form>
)


export default TodoForm;