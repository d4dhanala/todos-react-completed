import React, { Component } from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: ['laundry', 'dishes']
    }
  }

  addTodo = (todoText) => {
    const newTodos = [...this.state.todos, todoText]
    this.setState({ todos: newTodos })
  }

  deleteTodo = (index) => {
    const newTodos = this.state.todos.filter((ele, id) => id !== index)
    this.setState({ todos: newTodos })
  }

  saveTodo = (updatedTodo, index) => {
    let newTodos = this.state.todos.map((ele, id) => {
      if (id === index) {
        return updatedTodo
      } else {
        return ele
      }
    })
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <main>
        <br />
        <NewTodo addTodo={this.addTodo} />
        <br />
        <p>Current To Do List: </p>
        <Todos todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          saveTodo={this.saveTodo}
        />
      </main>
    );
  }
}

export default App;
