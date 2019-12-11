import React, { Component } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodo: ''
    }
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input 
          type="text"
          name="todoText"
          value={this.state.newTodo}
          onChange={this.handleChange}/>
        <input type="submit" disabled={!this.state.newTodo}/>
      </form>
    )
  }
}

export default NewTodo
