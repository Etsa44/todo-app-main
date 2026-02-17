export function createInput(uniqueId) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "inp-cbx";
  input.id = uniqueId;
  input.style.display = "none";
  input.addEventListener("change", function () {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (this.checked) {
      const task = tasks.find((task) => task.id === this.id);
      if (task) {
        task.status = "completed";
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(task.status);
      }
    }
  });
  return input;
}
