const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

/**
 * Requirement 2: Persisting Login Data
 * Only shows the button if credentials exist in localStorage.
 */
function updateUI() {
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

/**
 * Requirement 2: Form Submission Behavior
 * Handles alert and conditional localStorage saving.
 */
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); 

  const userVal = usernameInput.value;
  const passVal = passwordInput.value;

  if (rememberCheckbox.checked) {
    // Save credentials if checked
    localStorage.setItem("username", userVal);
    localStorage.setItem("password", passVal);
  } else {
    // Requirement 2: Remove credentials if unchecked
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Alert as per requirement
  alert(`Logged in as ${userVal}`);
  updateUI();
});

/**
 * Requirement 2: Existing User Button
 * Shows alert with saved username when clicked.
 */
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});

// Initial call on page load to check localStorage persistence
updateUI();