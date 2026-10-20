import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { DOMManager } from "./domManager.js";

const projects = [];
let currentProjectIndex = 0;
let currentFilter = "all";

const projectDialog = document.getElementById("project-dialog");
const openProjectDialogBtn = document.getElementById("open-project-dialog-btn");
const closeProjectDialogBtn = document.getElementById(
  "close-project-dialog-btn",
);
const projForm = document.getElementById("project-form");

const todoDialog = document.getElementById("todo-dialog");
const closeTodoDialogBtn = document.getElementById("close-todo-dialog-btn");
const todoForm = document.getElementById("todo-form");

if (openProjectDialogBtn && projectDialog) {
  openProjectDialogBtn.addEventListener("click", () =>
    projectDialog.showModal(),
  );
}
if (closeProjectDialogBtn && projectDialog) {
  closeProjectDialogBtn.addEventListener("click", () => projectDialog.close());
}

if (closeTodoDialogBtn && todoDialog) {
  closeTodoDialogBtn.addEventListener("click", () => todoDialog.close());
}

if (projForm) {
  projForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const projectNameInput = document.getElementById("project-name-input");
    if (!projectNameInput || !projectNameInput.value.trim()) return;

    const newProject = new Project(
      projectNameInput.value.trim(),
      "Custom project description",
    );

    projects.push(newProject);
    currentProjectIndex = projects.length - 1;
    updateUI();
    projForm.reset();

    if (projectDialog) {
      projectDialog.close();
    }
  });
}

if (todoForm) {
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("todo-description").value;
    const dueDate = document.getElementById("todo-due-date").value;
    const priority = document.getElementById("todo-priority").value;

    const newTodo = new Todo(title, description, dueDate, priority);
    projects[currentProjectIndex].addTodo(newTodo);

    updateUI();
    todoForm.reset();

    if (todoDialog) {
      todoDialog.close();
    }
  });
}

function updateUI() {
  DOMManager.renderSidebar(
    projects,
    currentProjectIndex,
    (index) => {
      currentProjectIndex = index;
      updateUI();
    },
    (indexToDelete) => {
      if (projects.length <= 1) {
        alert("You must have at least one project!");
        return;
      }

      projects.splice(indexToDelete, 1);
      if (currentProjectIndex >= projects.length) {
        currentProjectIndex = projects.length - 1;
      }
      updateUI();
    },
  );

  const project = projects[currentProjectIndex];
  let todosToDisplay = [];

  if (currentFilter === "all") {
    todosToDisplay = project.getAllTodos();
  } else if (currentFilter === "incomplete") {
    todosToDisplay = project.getFilteredTodos((t) => !t.completed);
  } else if (currentFilter === "completed") {
    todosToDisplay = project.getFilteredTodos((t) => t.completed);
  }

  DOMManager.renderProject(
    project,
    todosToDisplay,
    (titleToDelete) => {
      projects[currentProjectIndex].removeTodo(titleToDelete);
      updateUI();
    },
    (titleToToggle) => {
      const todo = projects[currentProjectIndex]
        .getAllTodos()
        .find((t) => t.title === titleToToggle);

      if (todo) {
        todo.toggleComplete();
      }
      updateUI();
    },
    () => {
      if (todoDialog) {
        todoDialog.showModal();
      }
    },
  );

  DOMManager.renderFilters(currentFilter, (selectedFilter) => {
    currentFilter = selectedFilter;
    updateUI();
  });

  saveToLocalStorage();
}

function saveToLocalStorage() {
  const projectsJSON = JSON.stringify(projects);
  localStorage.setItem("projects", projectsJSON);
}

function loadFromLocalStorage() {
  const savedProjectsJSON = localStorage.getItem("projects");
  if (savedProjectsJSON) {
    const savedProjects = JSON.parse(savedProjectsJSON);
    savedProjects.forEach((savedProject) => {
      const project = new Project(savedProject.name, savedProject.description);

      savedProject.todos.forEach((savedTodo) => {
        const todo = new Todo(
          savedTodo.title,
          savedTodo.description,
          savedTodo.dueDate,
          savedTodo.priority,
          savedTodo.completed,
        );
        project.addTodo(todo);
      });
      projects.push(project);
    });
    return true;
  }
  return false;
}

const loaded = loadFromLocalStorage();

if (!loaded) {
  const defaultProject = new Project(
    "Default Project",
    "This is the default project",
  );
  const task1 = new Todo(
    "Task 1",
    "Description for Task 1",
    "2023-12-31",
    "High",
  );
  const task2 = new Todo(
    "Task 2",
    "Description for Task 2",
    "2024-01-15",
    "Medium",
  );

  defaultProject.addTodo(task1);
  defaultProject.addTodo(task2);

  projects.push(defaultProject);
}

updateUI();
