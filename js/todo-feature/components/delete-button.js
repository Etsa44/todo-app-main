import { deleteTask } from "/js/todo-feature/delete-task.js";
export function createDeleteButton(uniqueId, liId) {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "close-btn";
  const deleteImg = document.createElement("img");
  deleteImg.src = "images/icon-cross.svg";
  deleteImg.alt = "delete";
  deleteBtn.appendChild(deleteImg);
  deleteBtn.addEventListener("click", () => {
    deleteTask(uniqueId, liId);
  });
  return deleteBtn;
}
