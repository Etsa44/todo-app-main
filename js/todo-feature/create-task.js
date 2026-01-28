import { createInput } from "./input.js";
import { createLabel } from "./label.js";
import { createDeleteButton } from "./delete-button.js";

export function createTask(text) {
  const uniqueId = "cbx-" + Math.random().toString(36).substr(2, 9);

  const li = document.createElement("li");
  li.className = "todo";

  const input = createInput(uniqueId);

  const label = createLabel(uniqueId, text);

  const deleteBtn = createDeleteButton();

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => li.remove());

  return li;
}
