document.getElementById("delete-all-button").addEventListener("click", () => {
  localStorage.removeItem("tasks");
});
