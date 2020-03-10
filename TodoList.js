import React from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

//$ npx create-react-app todolist (always initialize a new one like this, creates very simply)

//Todo List for Todos
//1. Add Todo
//2. Display todo
//3. Cross off/Complete Todo
//4. Show total number of active todos
//5. Filter all/active/complete
//6. Delete todo
//7. Delete all complete
//  7.1 Only show if atleast on is complete
//8. Button to toggle all on/off

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: 'all',
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        //update todo to completion=
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else {
          return todo;
        }
      })
    })
  }
  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  removeAllTodoThatAreComplete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    })
  }

  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    }
    else if (this.state.todoToShow === 'active') {
      todos = this.state.todos.filter(todo => !todos.complete)
    }
    else if (this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todos.complete);
    }
    return (
      <div>
        <div>
          <TodoForm onSubmit={this.addTodo} />
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              onDelete={() => this.handleDeleteTodo(todo.id)}
              id={todo.id}
              text={todo}
            />
          ))}
          <div>
            todos left: {this.state.todos.filter(todo => !todos.complete)}
          </div>
        </div>
        <button onClick={() => this.updateTodoToShow('all')}>all</button>
        <button onClick={() => this.updateTodoToShow('active')}>active</button>
        <button onClick={() => this.updateTodoToShow('complete')}>complete</button>

        {this.state.todos.some(todo => todo.complete) ? (
          <button onClick={() => this.removeAllTodoThatAreComplete()}>Delete Completed</button>
        ) : null}
        <div onClick={() => this.setState({
          todos: this.state.todos.map(todo => ({
            ...todo,
            complete: this.state.toggleAllComplete
          })),
          toggleAllComplete: !this.state.toggleAllComplete
        })}>
          Toggle All{`${this.state.toggleAllComplete}`}
        </div>
      </div>
    );
  }
}
