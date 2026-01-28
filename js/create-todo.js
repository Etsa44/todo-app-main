export function createTask(text) {
  const uniqueId = "cbx-" + Date.now();

  // 1. Le conteneur principal (li)
  const li = document.createElement("li");
  li.classList.add("todo-item"); // Utilise une classe plutôt qu'un ID

  // 2. Le wrapper de la checkbox
  const wrapper = document.createElement("div");
  wrapper.className = "checkbox-wrapper-15";

  // 3. L'input (caché)
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "inp-cbx";
  input.id = uniqueId;
  input.style.display = "none";

  // 4. Le label et ses composants
  const label = document.createElement("label");
  label.className = "cbx";
  label.setAttribute("for", uniqueId);

  // Le span pour le check (SVG)
  const spanCheck = document.createElement("span");
  spanCheck.innerHTML = `
    <svg width="12px" height="9px" viewbox="0 0 12 9">
      <polyline points="1 5 4 8 11 1"></polyline>
    </svg>
  `; // Ici le innerHTML est OK car le SVG est fixe/statique (pas d'input user)

  // LE SPAN POUR LE TEXTE (Sécurisé !)
  const spanText = document.createElement("span");
  spanText.textContent = text; // <-- C'est ici que la magie opère : aucun script ne peut s'exécuter

  // 5. Le bouton de suppression
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "close-btn";

  const deleteImg = document.createElement("img");
  deleteImg.src = "images/icon-cross.svg";
  deleteImg.alt = "delete icon";

  deleteBtn.appendChild(deleteImg);

  // --- ASSEMBLAGE ---
  label.appendChild(spanCheck);
  label.appendChild(spanText);

  wrapper.appendChild(input);
  wrapper.appendChild(label);

  li.appendChild(wrapper);
  li.appendChild(deleteBtn);

  // Événement de suppression
  deleteBtn.addEventListener("click", () => li.remove());
  return li;
}
