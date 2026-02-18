import { createTask } from "/js/todo-feature/create-task-container.js";

const todoList = document.getElementById("todo-list");
const allTask = document.getElementById("all");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

allTask.addEventListener("click", () => {
  tasks.forEach((task) => {
    const taskNode = createTask(task.tache);
    todoList.className = "todo-list";
    todoList.prepend(taskNode);
    allTask.style.color = "hsl(220, 98%, 61%)";
  });
});
