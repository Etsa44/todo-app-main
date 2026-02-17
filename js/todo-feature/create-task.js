import { createInput } from "./components/input.js";
import { createLabel } from "./components/label.js";
import { createDeleteButton } from "./components/delete-button.js";

export function createTask(text, uniqueId) {
  const li = document.createElement("li");
  li.className = "todo";
  const input = createInput(uniqueId);
  const label = createLabel(uniqueId, text);
  const deleteBtn = createDeleteButton();

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    li.remove();
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const remaining = tasks.filter((t) => t.tache !== text);
    localStorage.setItem("tasks", JSON.stringify(remaining));
  });
  return li;
}
