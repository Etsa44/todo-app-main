import { createTask } from "./todo-feature/create-task.js";

const todoInput = document.getElementById("input_text");
const checkBox = document.getElementById("cbx-12");
const todoList = document.getElementById("todo-list");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => {
  const taskNode = createTask(task.tache);
  todoList.className = "todo-list";
  todoList.prepend(taskNode);
});

checkBox.disabled = true;

function effect() {
  checkBox.disabled = todoInput.value.trim() === "";
}
todoInput.addEventListener("input", effect);

checkBox.addEventListener("change", function () {
  if (this.checked) {
    const todo = todoInput.value.trim();
    const task = {
      tache: todo,
      status: "in progress",
    };
    todoList.className = "todo-list";

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const newTask = createTask(todo);
    todoList.prepend(newTask);

    todoInput.value = "";
    setTimeout(() => {
      this.checked = false;
      effect();
    }, 1000);
  }
});
