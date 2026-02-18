import { completed } from "/js/todo-feature/completed-task.js";

export function createInput(uniqueId) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "inp-cbx";
  input.id = uniqueId;
  input.style.display = "none";
  input.addEventListener("change", function () {
    completed(this.id, this.checked);
  });
  return input;
}
