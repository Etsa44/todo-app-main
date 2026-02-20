export function getTask() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks;
}
