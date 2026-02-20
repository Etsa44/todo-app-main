import { getTask } from "/js/model/get-item.js";

const todoList = document.getElementById("todo-list");
const activeTaskBtn = document.getElementById("active");

activeTaskBtn.addEventListener("click", () => {
  const tasks = getTask();
  tasks.forEach((task) => {
    if (task.status === "in progress") {
      activeTaskBtn.style.color = "hsl(220, 98%, 61%)";
      console.log(task);
    }
  });
});
