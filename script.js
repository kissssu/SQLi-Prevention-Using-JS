const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const originalQueryOutput = document.getElementById('originalQuery');
const filteredQueryOutput = document.getElementById('filteredQuery');
const errorMessage = document.getElementById('errorMessage'); // Add this for error display

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // **Construct the original SQL query**
    let originalQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`; 

    // **Define a list of blacklisted keywords**
    const blacklistedKeywords = [
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE",
        "DROP",
        "ALTER",
        "UNION",
        "OR",
        "AND",
        "--",
        "/*",
        "*/",
        ";",
        "'" 
    ];

    // **Check for blacklisted keywords in the input**
    let hasSqlInjection = false;
    for (const keyword of blacklistedKeywords) {
        if (username.toUpperCase().includes(keyword) || password.toUpperCase().includes(keyword)) {
            hasSqlInjection = true;
            break;
        }
    }

    // **Filter the input and construct the filtered query**
    let filteredUsername = username;
    let filteredPassword = password;

    if (hasSqlInjection) {
        // **Basic filtering (replace with more robust sanitization)**
        filteredUsername = username.replace(/'/g, "\\'"); 
        filteredPassword = password.replace(/'/g, "\\'"); 

        // **Display an error message**
        errorMessage.textContent = "Possible SQL Injection detected! Input sanitized."; 

        // **Log the potential attack (for logging or firewall rules)**
        console.warn("Potential SQL Injection detected from:", username, password); 
    }

    const filteredQuery = `SELECT * FROM users WHERE username = '${filteredUsername}' AND password = '${filteredPassword}'`;

    originalQueryOutput.textContent = originalQuery;
    filteredQueryOutput.textContent = filteredQuery;

    // **(Placeholder) - Send the filtered query to your backend**
    // This would typically involve an AJAX request to your server-side code.
    // For this example, we'll just log the filtered query to the console.
    console.log("Filtered Query:", filteredQuery); 

});