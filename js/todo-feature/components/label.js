export function createLabel(uniqueId, text) {
  const label = document.createElement("label");
  label.className = "cbx";
  label.setAttribute("for", uniqueId);

  const span1 = document.createElement("span");
  span1.id = "span-1";
  span1.className = "span";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "12px");
  svg.setAttribute("height", "9px");
  svg.setAttribute("viewBox", "0 0 12 9");
  svg.classList.add("icon-check");

  const polyline = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline",
  );
  polyline.setAttribute("points", "1 5 4 8 11 1");

  svg.appendChild(polyline);
  span1.appendChild(svg);

  const span2 = document.createElement("span");
  span2.id = "span-2";
  span2.className = "span";
  span2.textContent = text;

  label.appendChild(span1);
  label.appendChild(span2);
  return label;
}
