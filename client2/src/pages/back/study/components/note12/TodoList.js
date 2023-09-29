import { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

export default class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = { todos: [] }
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }

  create (newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  update (todoId, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, task: updatedTask }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  toggleCompletion (todoId) {
    const completedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    this.setState({ todos: completedTodos })
  }

  remove (todoId) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== todoId)
    })
  }

  render () {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      )
    })

    return (
      <div className='TodoList'>
        <h1>
          Todo list <span>A simple React todo list app</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    )
  }
}
