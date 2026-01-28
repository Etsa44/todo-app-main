import { createTask } from "./todo-feature/create-task.js";

const todoInput = document.getElementById("input_text");
const checkBox = document.getElementById("cbx-12");
const todoList = document.getElementById("todo-list");

checkBox.disabled = true;

function effect() {
  checkBox.disabled = todoInput.value.trim() === "";
}
todoInput.addEventListener("input", effect);

checkBox.addEventListener("change", function () {
  if (this.checked) {
    const todo = todoInput.value.trim();
    todoInput.value = "";

    const newTask = createTask(todo);
    todoList.prepend(newTask);
    setTimeout(() => {
      this.checked = false;
      effect();
    }, 800);
  }
});
