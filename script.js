const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const originalQueryOutput = document.getElementById('originalQuery');
const filteredQueryOutput = document.getElementById('filteredQuery');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = usernameInput.value;
    let password = passwordInput.value;

    // **Construct the original SQL query (before any filtering)**
    const originalQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    originalQueryOutput.textContent = originalQuery;

    // **Sanitize inputs (escape single quotes and remove SQL keywords)**
    const sanitizedUsername = sanitizeInput(username);
    const sanitizedPassword = sanitizeInput(password);

    // **Construct the filtered query using the *sanitized values***
    const filteredQuery = `SELECT * FROM users WHERE username = '${sanitizedUsername}' AND password = '${sanitizedPassword}'`;
    filteredQueryOutput.textContent = filteredQuery;

    errorMessage.textContent = "";

    console.log("Sanitized Query (for backend - should use prepared statements):", filteredQuery);

    loginForm.reset();
});

function sanitizeInput(input) {
    let sanitized = input;

    // 1. Escape single quotes (most important)
    sanitized = sanitized.replace(/'/g, "''");

    // 2. Remove SQL keywords (more robust approach)
    const blacklistedKeywords = [
        "SELECT", "INSERT", "UPDATE", "DELETE", "DROP", "ALTER", "UNION",
        "OR", "AND", "--", "/*", "*/", ";" // Keep these for demonstration
    ];

    const keywordRegex = new RegExp(`\\b(${blacklistedKeywords.join('|')})\\b`, 'gi'); // Create a regex

    sanitized = sanitized.replace(keywordRegex, ""); // Remove keywords

    return sanitized;
}