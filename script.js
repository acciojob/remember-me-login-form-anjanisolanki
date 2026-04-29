//your JS code here. If required.
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');

// 1. Function to check localStorage and toggle the "Existing" button
function checkExistingUser() {
    if (localStorage.getItem('username')) {
        existingBtn.style.display = 'block';
    } else {
        existingBtn.style.display = 'none';
    }
}

// 2. Handle Form Submission
submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Stop form from refreshing the page
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberCheckbox.checked) {
        // Save to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Clear from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
    checkExistingUser(); // Refresh button visibility
});

// 3. Handle "Login as existing user" click
existingBtn.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
});

// Initial check when page loads
checkExistingUser();