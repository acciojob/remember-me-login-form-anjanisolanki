const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

/**
 * UI Toggle Logic
 * Controls the visibility of the 'existing' button based on localStorage.
 */
function updateUI() {
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

/**
 * Form Submission logic
 */
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents page reload to allow alert and storage logic

  const userVal = usernameInput.value;
  const passVal = passwordInput.value;

  if (rememberCheckbox.checked) {
    localStorage.setItem("username", userVal);
    localStorage.setItem("password", passVal);
  } else {
    // If checkbox is unchecked, remove stored data
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Exact alert string required by Cypress
  alert(`Logged in as ${userVal}`);
  updateUI();
});

/**
 * Existing User Login logic
 */
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});

// Run check on page load for persistence across reloads
updateUI();