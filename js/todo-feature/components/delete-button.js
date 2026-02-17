export function createDeleteButton() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "close-btn";
  const deleteImg = document.createElement("img");
  deleteImg.src = "images/icon-cross.svg";
  deleteImg.alt = "delete";
  deleteBtn.appendChild(deleteImg);
  return deleteBtn;
}
