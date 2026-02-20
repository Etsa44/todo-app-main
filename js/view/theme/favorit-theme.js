const savedTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}
