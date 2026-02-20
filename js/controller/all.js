import { createTask } from "/js/view/components/todo/li.js";
import { getTask } from "/js/model/get-item.js";

const todoList = document.getElementById("todo-list");
const allTask = document.getElementById("all");
const tasks = getTask();
allTask.addEventListener("click", () => {
  tasks.forEach((task) => {
    const taskNode = createTask(task.tache);
    todoList.className = "todo-list";
    todoList.prepend(taskNode);
    allTask.style.color = "hsl(220, 98%, 61%)";
  });
});
