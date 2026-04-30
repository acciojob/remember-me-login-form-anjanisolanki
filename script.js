const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Function to toggle button visibility based on localStorage
function updateUI() {
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

// Form Submission Behavior
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); 

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (rememberCheckbox.checked) {
    // Store credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove credentials if unchecked
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);
  updateUI();
});

// Existing User Login
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  alert(`Logged in as ${savedUsername}`);
});

// Initial load check
updateUI();