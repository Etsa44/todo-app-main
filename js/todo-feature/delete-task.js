export function deleteTask(id, id2) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  const taskElement = document.getElementById(id2);
  taskElement?.remove();
}
