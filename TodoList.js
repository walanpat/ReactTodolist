import react from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

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
    todos: []
  };

  addTodo = todo => {
    const newTodos = [todo, ...this.state.todos];
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </div>
    );
  }
}
