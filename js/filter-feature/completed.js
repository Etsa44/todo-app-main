import { createTask } from "/js/todo-feature/create-task-container.js";

const todoList = document.getElementById("todo-list");
const completedTaskBtn = document.getElementById("completed");

completedTaskBtn.addEventListener("click", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    if (task.status === "completed") {
      completedTaskBtn.style.color = "hsl(220, 98%, 61%)";
      console.log(task);
    }
  });
});
