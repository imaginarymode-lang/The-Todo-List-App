import { Project } from "./project.js";

export const DOMManager = {
  /**
   * @param {Project} project
   * @param {Function} onDeleteTodo
   */
  renderFilters(currentFilter, onSelectFilter) {
    const projectContainer = document.getElementById("project-container");

    if (!projectContainer) return;

    const filterContainer = document.createElement("div");
    filterContainer.classList.add("filter-container");

    const filters = ["all", "completed", "incomplete"];

    filters.name = "filters";
    filters.forEach((filterType) => {
      const btn = document.createElement("button");

      btn.textContent =
        filterType.charAt(0).toUpperCase() + filterType.slice(1);

      if (filterType === currentFilter) {
        btn.classList.add("active-filter");
      }
      btn.addEventListener("click", () => {
        onSelectFilter(filterType);
      });
      filterContainer.append(btn);
    });
    projectContainer.append(filterContainer);
  },

  renderProject(
    project,
    todosToDisplay,
    onDeleteTodo,
    onToggleComplete,
    onOpenToDoDialog,
  ) {
    const projectContainer = document.getElementById("project-container");

    if (!projectContainer) return;

    while (projectContainer.firstChild) {
      projectContainer.removeChild(projectContainer.firstChild);
    }

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("project-header-card");

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h3.textContent = project.name;
    p.textContent = project.description;

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.classList.add("add-btn-primary");
    addTaskBtn.addEventListener("click", onOpenToDoDialog);

    headerDiv.append(h3, p, addTaskBtn);
    projectContainer.append(headerDiv);

    todosToDisplay.forEach((todoItem) => {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo-item");

      if (todoItem.completed) {
        todoDiv.classList.add("completed");
      }

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todoItem.completed;
      checkbox.addEventListener("change", () => {
        onToggleComplete(todoItem.title);
      });

      const todoTitle = document.createElement("h4");
      const todoDescription = document.createElement("p");
      const todoDueDate = document.createElement("p");
      const todoPriority = document.createElement("p");

      todoTitle.textContent = todoItem.title;
      todoDescription.textContent = todoItem.description;
      todoDueDate.textContent = `Due Date: ${todoItem.dueDate}`;
      todoPriority.textContent = `Priority: ${todoItem.priority}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        onDeleteTodo(todoItem.title);
      });
      todoDiv.append(
        checkbox,
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        deleteBtn,
      );

      projectContainer.append(todoDiv);
    });
  },
  /**
   *@param {Project[]} projects
   *@param {number} currentProjectIndex
   *@param {Function} onSelectProject
   */
  renderSidebar: function (
    projects,
    currentProjectIndex,
    onSelectProject,
    onDeleteProject,
  ) {
    const sidebar = document.getElementById("sidebar-container");
    while (sidebar.firstChild) {
      sidebar.removeChild(sidebar.firstChild);
    }
    projects.forEach((project, index) => {
      const projectItemDiv = document.createElement("div");
      projectItemDiv.classList.add("project-item");
      const button = document.createElement("button");
      button.textContent = project.name;

      if (index === currentProjectIndex) {
        button.classList.add("active");
      }

      button.addEventListener("click", () => {
        onSelectProject(index);
      });

      const deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.textContent = "Delete Project";
      deleteProjectBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        onDeleteProject(index);
      });

      projectItemDiv.append(button, deleteProjectBtn);
      sidebar.append(projectItemDiv);
    });
  },
};
