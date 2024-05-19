Budget Tracker
This budget tracker is a simple web application that helps users track their income, expenses, and total balance. Users can input their income and expenses along with a brief description, and the application will calculate the total income, total expenses, and the remaining balance in real-time.


Features:
- **Income Tracking**: Users can input their income along with a description. Description is required.
- **Expense Tracking**: Users can input their expenses along with a description. Description is required.
- **Real-time Updates**: Total income, total expenses, and total balance are updated dynamically as users add or remove income and expenses.
- **Entry History**: Users can view a history of their income and expenses.

Technologies Used:
- **HTML**: For structuring the web page.
- **SASS/CSS**: For styling the web page.
- **JavaScript**: For implementing the interactive features and calculations.

Usage
1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Input your income and expenses along with their descriptions in the provided fields.
4. Click the "Enter" button to submit the entries.
5. View the updated total income, total expenses, and total balance.
6. You can also expand the entry history sections to view the history of income and expenses.

JavaScript Functionality:
- **Input Validation**: 
  - Users can only input numbers and a decimal point for the amount of income and expenses.
  - If an invalid amount is entered, an alert will be displayed, and the input field will be cleared.
- **Description Requirement**: 
  - Users must provide a description for both income and expenses.
  - If a description is not provided, an alert will be displayed, and the input field will be cleared.

File Structure:
- **index.html**: Contains the structure of the web page along with form elements for inputting income and expenses.
- **script.js**: Contains the JavaScript code for handling form submission, calculations, input validation, and updating the display.
