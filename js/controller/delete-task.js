import { getTask } from "/js/model/get-item.js";

export function deleteTask(id, id2) {
  const tasks = getTask();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  const taskElement = document.getElementById(id2);
  taskElement?.remove();
}
