import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputText: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleAddTodo = () => {
    const { inputText, todos } = this.state;
    if (inputText.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      this.setState({
        todos: [...todos, newTodo],
        inputText: '',
      });
    }
  };

  handleToggleComplete = (id) => {
    const updatedTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  handleDeleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

  handleDeleteAllTodos = () => {
    this.setState({ todos: [] });
  };

  render() {
    const { todos, inputText } = this.state;
    return (
      <div className="todo-list-container">
        <h1>Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={this.handleInputChange}
            placeholder="Enter a new todo"
            className="todo-input"
          />
          <button onClick={this.handleAddTodo} className="add-button"> + </button>
        </div>
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              {todo.text}
              <button onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={this.handleDeleteAllTodos} className="delete-all-button">Delete All</button>
      </div>
    );
  }
}

export default TodoList;
