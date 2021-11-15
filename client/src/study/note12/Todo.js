import { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { isEditing: false, task: this.props.task }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  //componentDidUpdate(prevProps, prevState) {
  //console.log('todo.js component did update')
  //console.log(prevProps.todos)
  //console.log(this.props.task)
  //}

  componentWillUnmount() {
    console.log('in componen did unmount')
  }

  handleChange(e) {
    this.setState({ task: e.target.value })
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleUpdate(e) {
    e.preventDefault()
    //take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({ isEditing: false })
  }

  handleToggle(e) {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div className='Todo'>
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className='Todo'>
          <li
            className={
              this.props.completed ? 'Todo-task completed' : 'Todo-Task'
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className='Todo-buttons'>
            <button onClick={this.toggleForm}>
              <i className='fas fa-pen'></i>E
            </button>
            <button onClick={this.handleRemove}>
              <i className='fas fa-trash'></i>X
            </button>
          </div>
        </div>
      )
    }

    return result
  }
}
