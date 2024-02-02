const checkbox = document.getElementById("theme-controller");

// Save checkbox state on change
checkbox.addEventListener("change", (event) => {
  localStorage.setItem("theme", event.target.checked ? "luxury" : "dim"); // Store "dark" or "light"
});

// Restore checkbox state on page load
const savedState = localStorage.getItem("theme");
checkbox.checked = savedState === "luxury"; // Set checkbox based on saved state
