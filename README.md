# SQLi Prevention Filter (**Front-End Demonstration** )

This project demonstrates a basic front-end approach to SQL injection prevention for educational purposes. It's important to understand that **client-side filtering alone is not sufficient** to secure your application. Always implement robust server-side security measures.

## Important Disclaimer

**This project is still under development and being tested.  It should NOT be used as a production-ready solution for SQL injection prevention.  The client-side sanitization demonstrated here is NOT a substitute for proper server-side security measures, especially the use of parameterized queries (prepared statements).  Relying solely on this client-side code for security is highly discouraged and could leave your application vulnerable.**

This demo is intended for educational purposes to illustrate the concepts of SQL injection and basic input sanitization.  For production applications, please ensure that you implement robust server-side security, including parameterized queries, input validation, and other appropriate security best practices.

## Technologies Used

* HTML
* CSS
* JavaScript

## **Files:**

* index.html: Contains the login form and basic structure of the page.
* style.css: Styles the login form and query output elements.
* script.js: Implements the logic for handling user input, filtering, and displaying the original and filtered queries.

## Functionality

The web form allows users to enter a username and password.  The JavaScript code then:

1. Constructs the original SQL query using the user-provided input (this query is potentially vulnerable to SQL injection).
2. Sanitizes the user input by escaping single quotes and removing common SQL keywords.
3. Constructs a filtered SQL query using the sanitized input.
4. Displays both the original and filtered queries in the HTML.

## **Learning Objectives:**

* Understand the vulnerabilities of SQL injection.
* Implement basic client-side filtering techniques (while acknowledging their limitations).
* Recognize the importance of server-side security measures for robust protection.

## **Server-Side Security Recommendations:**

To effectively prevent SQL injection, it's crucial to implement security measures on the server-side. Here are some recommended approaches:

* **Prepared statements (parameterized queries):** This is the most secure approach as it separates the data from the query, preventing malicious code injection.
* **Input validation and sanitization:** Validate and sanitize all user input to ensure it conforms to expected data types and formats.

## Further Development

Future improvements may include:

* More comprehensive input validation.
* Integration with a backend server and database.
* Improved user interface and error handling.

## Usage

1. Clone the repository.
2. Open the `index.html` file in your web browser.
3. Enter a username and password.
4. Click the "Login" button.
5. The original and filtered queries will be displayed in the output area.

## **Disclaimer:**

This code is provided as-is for educational purposes only and does not constitute professional security advice. It is your responsibility to implement appropriate security measures in your applications.
