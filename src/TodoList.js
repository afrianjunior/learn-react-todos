import React from 'react';
import AddTodoForm from './AddTodoForm';

export default class TodoList extends React.Component {
  state = {
    name: 'Junior',
    age: 23,
    baseSalary: 1000000,
    tax: 0.2,
    todos: ['Makan', 'Minum'],
  };

  /**
   * Add to do
   */
  addTodo = (todoTitle) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.concat(todoTitle),
    });
  };

  render() {
    const { name, age, todos, baseSalary, tax } = this.state;

    const netSalary = baseSalary - (baseSalary * tax);

    return (
      <div>
        <p>Todo list of {name} age of {age}</p>
        <p>Net salary {netSalary.toLocaleString()}</p>
        <AddTodoForm onAddTodo={this.addTodo} />
        <ul>
          {todos.map((todo, i) => (
            <p key={i}>{todo}</p>
          ))}
        </ul>
      </div>
    );
  }
}