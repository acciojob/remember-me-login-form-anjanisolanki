const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

/**
 * 1. UI Toggle Logic
 * Only shows the 'existing user' button if data exists in localStorage.
 */
function updateUI() {
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

/**
 * 2. Form Submission Behavior
 * Handles alerts and localStorage management.
 */
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Stop page refresh

  const userVal = usernameInput.value;
  const passVal = passwordInput.value;

  if (rememberCheckbox.checked) {
    // Requirement: Store credentials if checked
    localStorage.setItem("username", userVal);
    localStorage.setItem("password", passVal);
  } else {
    // Requirement: Remove credentials if unchecked
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Exact alert string required by Cypress
  alert(`Logged in as ${userVal}`);
  updateUI();
});

/**
 * 3. Existing User Login
 * Requirement: Alert with saved username.
 */
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});

// Run check on page load for persistence across reloads
updateUI();