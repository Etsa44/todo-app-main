import { createTask } from "./todo-feature/create-task-container.js";
import { countTasks } from "./count-tasks.js";

const todoInput = document.getElementById("input_text");
const checkBox = document.getElementById("cbx-12");
const todoList = document.getElementById("todo-list");
const tasksNumberContainer = document.getElementById("tasksNumberContainer");
const allTask = document.getElementById("all");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasksNumberContainer.prepend(countTasks());

checkBox.disabled = true;

function effect() {
  checkBox.disabled = todoInput.value.trim() === "";
}
todoInput.addEventListener("input", effect);

window.addEventListener("DOMContentLoaded", () => {
  tasks.forEach((task) => {
    const taskNode = createTask(task.tache, task.id);
    todoList.className = "todo-list";
    todoList.prepend(taskNode);
    allTask.style.color = "hsl(220, 98%, 61%)";
  });
});

checkBox.addEventListener("change", function () {
  const uniqueId = "task-" + Math.random().toString(36).substr(2, 9);
  if (this.checked) {
    const todo = todoInput.value.trim();
    const task = {
      id: uniqueId,
      tache: todo,
      status: "in progress",
    };
    todoList.className = "todo-list";

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const newTask = createTask(todo, uniqueId);
    todoList.prepend(newTask);

    todoInput.value = "";
    setTimeout(() => {
      this.checked = false;
      effect();
    }, 1000);
  }
});
