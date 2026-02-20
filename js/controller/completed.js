import { getTask } from "/js/model/get-item.js";

const todoList = document.getElementById("todo-list");
const completedTaskBtn = document.getElementById("completed");

completedTaskBtn.addEventListener("click", () => {
  const tasks = getTask();
  tasks.forEach((task) => {
    if (task.status === "completed") {
      completedTaskBtn.style.color = "hsl(220, 98%, 61%)";
      console.log(task);
    }
  });
});
