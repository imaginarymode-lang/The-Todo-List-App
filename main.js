/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManager.js"
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMManager: () => (/* binding */ DOMManager)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\nconst DOMManager = {\r\n  /**\r\n   * @param {Project} project\r\n   * @param {Function} onDeleteTodo\r\n   */\r\n  renderFilters(currentFilter, onSelectFilter) {\r\n    const projectContainer = document.getElementById(\"project-container\");\r\n\r\n    if (!projectContainer) return;\r\n\r\n    const filterContainer = document.createElement(\"div\");\r\n    filterContainer.classList.add(\"filter-container\");\r\n\r\n    const filters = [\"all\", \"completed\", \"incomplete\"];\r\n\r\n    filters.name = \"filters\";\r\n    filters.forEach((filterType) => {\r\n      const btn = document.createElement(\"button\");\r\n\r\n      btn.textContent =\r\n        filterType.charAt(0).toUpperCase() + filterType.slice(1);\r\n\r\n      if (filterType === currentFilter) {\r\n        btn.classList.add(\"active-filter\");\r\n      }\r\n      btn.addEventListener(\"click\", () => {\r\n        onSelectFilter(filterType);\r\n      });\r\n      filterContainer.append(btn);\r\n    });\r\n    projectContainer.append(filterContainer);\r\n  },\r\n\r\n  renderProject(\r\n    project,\r\n    todosToDisplay,\r\n    onDeleteTodo,\r\n    onToggleComplete,\r\n    onOpenToDoDialog,\r\n  ) {\r\n    const projectContainer = document.getElementById(\"project-container\");\r\n\r\n    if (!projectContainer) return;\r\n\r\n    while (projectContainer.firstChild) {\r\n      projectContainer.removeChild(projectContainer.firstChild);\r\n    }\r\n\r\n    const headerDiv = document.createElement(\"div\");\r\n    headerDiv.classList.add(\"project-header-card\");\r\n\r\n    const h3 = document.createElement(\"h3\");\r\n    const p = document.createElement(\"p\");\r\n    h3.textContent = project.name;\r\n    p.textContent = project.description;\r\n\r\n    const addTaskBtn = document.createElement(\"button\");\r\n    addTaskBtn.textContent = \"Add Task\";\r\n    addTaskBtn.classList.add(\"add-btn-primary\");\r\n    addTaskBtn.addEventListener(\"click\", onOpenToDoDialog);\r\n\r\n    headerDiv.append(h3, p, addTaskBtn);\r\n    projectContainer.append(headerDiv);\r\n\r\n    todosToDisplay.forEach((todoItem) => {\r\n      const todoDiv = document.createElement(\"div\");\r\n      todoDiv.classList.add(\"todo-item\");\r\n\r\n      if (todoItem.completed) {\r\n        todoDiv.classList.add(\"completed\");\r\n      }\r\n\r\n      const checkbox = document.createElement(\"input\");\r\n      checkbox.type = \"checkbox\";\r\n      checkbox.checked = todoItem.completed;\r\n      checkbox.addEventListener(\"change\", () => {\r\n        onToggleComplete(todoItem.title);\r\n      });\r\n\r\n      const todoTitle = document.createElement(\"h4\");\r\n      const todoDescription = document.createElement(\"p\");\r\n      const todoDueDate = document.createElement(\"p\");\r\n      const todoPriority = document.createElement(\"p\");\r\n\r\n      todoTitle.textContent = todoItem.title;\r\n      todoDescription.textContent = todoItem.description;\r\n      todoDueDate.textContent = `Due Date: ${todoItem.dueDate}`;\r\n      todoPriority.textContent = `Priority: ${todoItem.priority}`;\r\n\r\n      const deleteBtn = document.createElement(\"button\");\r\n      deleteBtn.textContent = \"Delete\";\r\n      deleteBtn.addEventListener(\"click\", () => {\r\n        onDeleteTodo(todoItem.title);\r\n      });\r\n      todoDiv.append(\r\n        checkbox,\r\n        todoTitle,\r\n        todoDescription,\r\n        todoDueDate,\r\n        todoPriority,\r\n        deleteBtn,\r\n      );\r\n\r\n      projectContainer.append(todoDiv);\r\n    });\r\n  },\r\n  /**\r\n   *@param {Project[]} projects\r\n   *@param {number} currentProjectIndex\r\n   *@param {Function} onSelectProject\r\n   */\r\n  renderSidebar: function (\r\n    projects,\r\n    currentProjectIndex,\r\n    onSelectProject,\r\n    onDeleteProject,\r\n  ) {\r\n    const sidebar = document.getElementById(\"sidebar-container\");\r\n    while (sidebar.firstChild) {\r\n      sidebar.removeChild(sidebar.firstChild);\r\n    }\r\n    projects.forEach((project, index) => {\r\n      const projectItemDiv = document.createElement(\"div\");\r\n      projectItemDiv.classList.add(\"project-item\");\r\n      const button = document.createElement(\"button\");\r\n      button.textContent = project.name;\r\n\r\n      if (index === currentProjectIndex) {\r\n        button.classList.add(\"active\");\r\n      }\r\n\r\n      button.addEventListener(\"click\", () => {\r\n        onSelectProject(index);\r\n      });\r\n\r\n      const deleteProjectBtn = document.createElement(\"button\");\r\n      deleteProjectBtn.textContent = \"Delete Project\";\r\n      deleteProjectBtn.addEventListener(\"click\", (event) => {\r\n        event.stopPropagation();\r\n        onDeleteProject(index);\r\n      });\r\n\r\n      projectItemDiv.append(button, deleteProjectBtn);\r\n      sidebar.append(projectItemDiv);\r\n    });\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/domManager.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManager.js */ \"./src/domManager.js\");\n\r\n\r\n\r\n\r\nconst projects = [];\r\nlet currentProjectIndex = 0;\r\nlet currentFilter = \"all\";\r\n\r\nconst projectDialog = document.getElementById(\"project-dialog\");\r\nconst openProjectDialogBtn = document.getElementById(\"open-project-dialog-btn\");\r\nconst closeProjectDialogBtn = document.getElementById(\r\n  \"close-project-dialog-btn\",\r\n);\r\nconst projForm = document.getElementById(\"project-form\");\r\n\r\nconst todoDialog = document.getElementById(\"todo-dialog\");\r\nconst closeTodoDialogBtn = document.getElementById(\"close-todo-dialog-btn\");\r\nconst todoForm = document.getElementById(\"todo-form\");\r\n\r\nif (openProjectDialogBtn && projectDialog) {\r\n  openProjectDialogBtn.addEventListener(\"click\", () =>\r\n    projectDialog.showModal(),\r\n  );\r\n}\r\nif (closeProjectDialogBtn && projectDialog) {\r\n  closeProjectDialogBtn.addEventListener(\"click\", () => projectDialog.close());\r\n}\r\n\r\nif (closeTodoDialogBtn && todoDialog) {\r\n  closeTodoDialogBtn.addEventListener(\"click\", () => todoDialog.close());\r\n}\r\n\r\nif (projForm) {\r\n  projForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const projectNameInput = document.getElementById(\"project-name-input\");\r\n    if (!projectNameInput || !projectNameInput.value.trim()) return;\r\n\r\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(\r\n      projectNameInput.value.trim(),\r\n      \"Custom project description\",\r\n    );\r\n\r\n    projects.push(newProject);\r\n    currentProjectIndex = projects.length - 1;\r\n    updateUI();\r\n    projForm.reset();\r\n\r\n    if (projectDialog) {\r\n      projectDialog.close();\r\n    }\r\n  });\r\n}\r\n\r\nif (todoForm) {\r\n  todoForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const title = document.getElementById(\"todo-title\").value;\r\n    const description = document.getElementById(\"todo-description\").value;\r\n    const dueDate = document.getElementById(\"todo-due-date\").value;\r\n    const priority = document.getElementById(\"todo-priority\").value;\r\n\r\n    const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority);\r\n    projects[currentProjectIndex].addTodo(newTodo);\r\n\r\n    updateUI();\r\n    todoForm.reset();\r\n\r\n    if (todoDialog) {\r\n      todoDialog.close();\r\n    }\r\n  });\r\n}\r\n\r\nfunction updateUI() {\r\n  _domManager_js__WEBPACK_IMPORTED_MODULE_2__.DOMManager.renderSidebar(\r\n    projects,\r\n    currentProjectIndex,\r\n    (index) => {\r\n      currentProjectIndex = index;\r\n      updateUI();\r\n    },\r\n    (indexToDelete) => {\r\n      if (projects.length <= 1) {\r\n        alert(\"You must have at least one project!\");\r\n        return;\r\n      }\r\n\r\n      projects.splice(indexToDelete, 1);\r\n      if (currentProjectIndex >= projects.length) {\r\n        currentProjectIndex = projects.length - 1;\r\n      }\r\n      updateUI();\r\n    },\r\n  );\r\n\r\n  const project = projects[currentProjectIndex];\r\n  let todosToDisplay = [];\r\n\r\n  if (currentFilter === \"all\") {\r\n    todosToDisplay = project.getAllTodos();\r\n  } else if (currentFilter === \"incomplete\") {\r\n    todosToDisplay = project.getFilteredTodos((t) => !t.completed);\r\n  } else if (currentFilter === \"completed\") {\r\n    todosToDisplay = project.getFilteredTodos((t) => t.completed);\r\n  }\r\n\r\n  _domManager_js__WEBPACK_IMPORTED_MODULE_2__.DOMManager.renderProject(\r\n    project,\r\n    todosToDisplay,\r\n    (titleToDelete) => {\r\n      projects[currentProjectIndex].removeTodo(titleToDelete);\r\n      updateUI();\r\n    },\r\n    (titleToToggle) => {\r\n      const todo = projects[currentProjectIndex]\r\n        .getAllTodos()\r\n        .find((t) => t.title === titleToToggle);\r\n\r\n      if (todo) {\r\n        todo.toggleComplete();\r\n      }\r\n      updateUI();\r\n    },\r\n    () => {\r\n      if (todoDialog) {\r\n        todoDialog.showModal();\r\n      }\r\n    },\r\n  );\r\n\r\n  _domManager_js__WEBPACK_IMPORTED_MODULE_2__.DOMManager.renderFilters(currentFilter, (selectedFilter) => {\r\n    currentFilter = selectedFilter;\r\n    updateUI();\r\n  });\r\n\r\n  saveToLocalStorage();\r\n}\r\n\r\nfunction saveToLocalStorage() {\r\n  const projectsJSON = JSON.stringify(projects);\r\n  localStorage.setItem(\"projects\", projectsJSON);\r\n}\r\n\r\nfunction loadFromLocalStorage() {\r\n  const savedProjectsJSON = localStorage.getItem(\"projects\");\r\n  if (savedProjectsJSON) {\r\n    const savedProjects = JSON.parse(savedProjectsJSON);\r\n    savedProjects.forEach((savedProject) => {\r\n      const project = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(savedProject.name, savedProject.description);\r\n\r\n      savedProject.todos.forEach((savedTodo) => {\r\n        const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\r\n          savedTodo.title,\r\n          savedTodo.description,\r\n          savedTodo.dueDate,\r\n          savedTodo.priority,\r\n          savedTodo.completed,\r\n        );\r\n        project.addTodo(todo);\r\n      });\r\n      projects.push(project);\r\n    });\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nconst loaded = loadFromLocalStorage();\r\n\r\nif (!loaded) {\r\n  const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(\r\n    \"Default Project\",\r\n    \"This is the default project\",\r\n  );\r\n  const task1 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\r\n    \"Task 1\",\r\n    \"Description for Task 1\",\r\n    \"2023-12-31\",\r\n    \"High\",\r\n  );\r\n  const task2 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\r\n    \"Task 2\",\r\n    \"Description for Task 2\",\r\n    \"2024-01-15\",\r\n    \"Medium\",\r\n  );\r\n\r\n  defaultProject.addTodo(task1);\r\n  defaultProject.addTodo(task2);\r\n\r\n  projects.push(defaultProject);\r\n}\r\n\r\nupdateUI();\r\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/index.js?\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\r\nclass Project {\r\n  constructor(name, description) {\r\n    this.name = name;\r\n    this.description = description;\r\n    this.todos = [];\r\n  }\r\n\r\n  addTodo(todo) {\r\n    this.todos.push(todo);\r\n  }\r\n\r\n  removeTodo(titleToRemove) {\r\n    this.todos = this.todos.filter((t) => t.title !== titleToRemove);\r\n  }\r\n\r\n  getAllTodos() {\r\n    return this.todos;\r\n  }\r\n  getFilteredTodos(filterFn) {\r\n    return this.todos.filter(filterFn);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/project.js?\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n  constructor(title, description, dueDate, priority, completed = false) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.completed = completed;\r\n  }\r\n\r\n  toggleComplete() {\r\n    this.completed = !this.completed;\r\n  }\r\n\r\n  displayInfo() {\r\n    console.log(\r\n      `Title: ${this.title}, Description: ${this.description}, Due: ${this.dueDate}, Priority: ${this.priority}`,\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list-web-practice/./src/todo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;