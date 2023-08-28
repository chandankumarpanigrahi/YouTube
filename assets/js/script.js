// Dark Mode Toggle
const toggleButton = document.getElementById("toggleButton");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
});