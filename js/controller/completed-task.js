import { getTask } from "/js/model/get-item.js";
import { saveTask } from "/js/model/save-item.js";
export function completed(id, isChecked) {
  const tasks = getTask();
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.status = isChecked ? "completed" : "in progress";
    saveTask(tasks);
  }
}
