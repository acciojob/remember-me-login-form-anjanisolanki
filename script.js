const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

/**
 * 1. UI Toggle Logic
 * Controls the visibility of the 'Login as existing user' button
 * based on whether credentials exist in localStorage.
 */
function updateUI() {
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

/**
 * 2. Form Submission logic
 * Handles credential storage based on the checkbox status.
 */
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent page refresh to show alert

  const userVal = usernameInput.value;
  const passVal = passwordInput.value;

  if (rememberCheckbox.checked) {
    localStorage.setItem("username", userVal);
    localStorage.setItem("password", passVal);
  } else {
    // Requirements: If unchecked, remove any previously stored credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Exact alert string required by tests
  alert(`Logged in as ${userVal}`);
  updateUI();
});

/**
 * 3. Existing User Login
 * Alerts the username currently stored in localStorage.
 */
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});

// Run initial check on page load to set button visibility
updateUI();