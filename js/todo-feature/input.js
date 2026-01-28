export function createInput(uniqueId) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "inp-cbx";
  input.id = uniqueId;
  input.style.display = "none";

  return input;
}
