import { createTask } from "/js/todo-feature/create-task-container.js";

const todoList = document.getElementById("todo-list");
const completedTaskBtn = document.getElementById("completed");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

completedTaskBtn.addEventListener("click", () => {
  tasks.forEach((task) => {
    const completedTasks = tasks.filter((task) => task.status === "completed");
    completedTaskBtn.style.color = "hsl(220, 98%, 61%)";
    console.log(completedTasks);
  });
});
