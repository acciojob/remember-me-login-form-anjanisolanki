const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// 1. Function to show/hide the 'existing user' button
function updateUI() {
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

// 2. Handle the "Submit" button click
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Stop form from refreshing the page

  const userVal = usernameInput.value;
  const passVal = passwordInput.value;

  if (rememberCheckbox.checked) {
    localStorage.setItem("username", userVal);
    localStorage.setItem("password", passVal);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${userVal}`);
  updateUI();
});

// 3. Handle the "Login as existing user" button click
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  alert(`Logged in as ${savedUser}`);
});

// Run this on page load to check if we should show the button
updateUI();