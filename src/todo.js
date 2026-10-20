export class Todo {
  constructor(title, description, dueDate, priority, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  displayInfo() {
    console.log(
      `Title: ${this.title}, Description: ${this.description}, Due: ${this.dueDate}, Priority: ${this.priority}`,
    );
  }
}
