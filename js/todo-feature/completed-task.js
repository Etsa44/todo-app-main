export function completed(id, isChecked) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.status = isChecked ? "completed" : "in progress";
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
