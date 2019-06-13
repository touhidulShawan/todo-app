import React, { Component } from "react";
import "../assets/css/style.css";

// import components
import Header from "../components/Header";
import Addtodo from "../components/Addtodo";
import TodoList from "../components/TodoList";

export default class App extends Component {
  state = {
    todoText: "",
    todos: [{ todo: "Do the Homework", isDone: false }]
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          todo: this.state.todoText,
          isDone: false
        }
      ]
    });
  };

  handleChangeInput = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  deleteTodo = index => {
    let newTodos = this.state.todos;
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Addtodo
          submitForm={this.handleSubmit}
          inputValue={this.handleChangeInput}
          value={this.state.todoText}
        />
        <div className="todoItem__container">
          {this.state.todos.map((todo, key) => {
            return (
              <TodoList
                todo={todo.todo}
                key={key}
                deleteTodo={() => this.deleteTodo(key)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
