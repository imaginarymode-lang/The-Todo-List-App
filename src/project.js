import { Todo } from "./todo.js";
export class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(titleToRemove) {
    this.todos = this.todos.filter((t) => t.title !== titleToRemove);
  }

  getAllTodos() {
    return this.todos;
  }
  getFilteredTodos(filterFn) {
    return this.todos.filter(filterFn);
  }
}
