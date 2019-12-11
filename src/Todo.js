import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      editTodo: this.props.todo,
      oldTodo: this.props.todo
    }
  }

  updateState = () => this.setState({ editing: !this.state.editing, editTodo: this.props.todo, oldTodo: this.props.todo })

  handleUpdate = (event) => {
    let temp = event.target.value
    this.setState({ editTodo: temp })
  }

  render() {
    return (
      <li>

        {
          (this.state.editing)
          ? 
          <span>
                <input type="text" onChange={this.handleUpdate} value={this.state.editTodo} />
                <button onClick={() => {
                  this.props.saveTodo(this.state.oldTodo, this.props.index)
                  this.updateState()
                }}>Cancel</button>
              </span>
            : 
            <span>{' ' + this.props.todo+"\t"}</span>
          }
          <button onClick={() => this.props.deleteTodo(this.props.index)} disabled={this.state.editing}>Delete</button>
          <button onClick={this.updateState} hidden={this.state.editing}>Update</button>
          <button onClick={() => {
            this.props.saveTodo(this.state.editTodo, this.props.index)
            this.updateState()
          }} hidden={!this.state.editing} disabled={!this.state.editTodo}>Save</button>
      </li>
    )
  }

}

export default Todo;
