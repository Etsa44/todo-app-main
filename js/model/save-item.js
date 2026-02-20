export function saveTask(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
