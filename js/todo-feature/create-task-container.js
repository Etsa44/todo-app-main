import { createInput } from "./components/input.js";
import { createLabel } from "./components/label.js";
import { createDeleteButton } from "./components/delete-button.js";

export function createTask(text, uniqueId) {
  const li = document.createElement("li");
  const liId = `li-${uniqueId}`;
  li.id = liId;
  li.className = "todo";
  const input = createInput(uniqueId);
  const label = createLabel(uniqueId, text);
  const deleteBtn = createDeleteButton(uniqueId, liId);

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(deleteBtn);
  return li;
}
