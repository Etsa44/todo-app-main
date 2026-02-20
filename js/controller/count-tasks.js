export function countTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const tasksNumber = tasks.length;
  const span = document.createElement("span");
  span.textContent = tasksNumber;
  span.style.padding = "0px 4px";
  return span;
}
