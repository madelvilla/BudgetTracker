//-------------- ACCORIDION START-----------------
let acc = document.getElementsByClassName("accordion"); //grabbing according div
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//-------------- ACCORIDION END-----------------



class Budget {
    constructor() {
        this.totalDisplay = 0;
        this.totalIncome = 0;
        this.totalExpenses = 0;
        this.income = [];
        this.expenses = [];
    }

    addIncome(description, amount) {
        this.income.push({description, amount});
        this.totalDisplay += amount;
        this.totalIncome += amount;
        updateTotalIncome();
    }

    addExpense(description, amount) {
        this.expenses.push({description, amount});
        this.totalDisplay -= amount;
        this.totalExpenses += amount;
        updateTotalExpenses();
    }

    calculateTotalBudget() {
        return this.totalDisplay.toFixed(2);
    }

    calculateTotalIncome() {
        return this.totalIncome.toFixed(2);
    }

    calculateTotalExpenses() {
        return this.totalExpenses.toFixed(2);
    }
}

// Instantiate Budget class
const budget = new Budget();

// Function to update total balance display
function updateTotalDisplay() {
    const totalBalanceDisplay = document.querySelector('.total-display');
    totalBalanceDisplay.textContent = budget.calculateTotalBudget();
}

// Function to update total income display
function updateTotalIncome() {
    const totalIncomeDisplay = document.querySelector('.income-total');
    totalIncomeDisplay.textContent = budget.calculateTotalIncome();
}

// Function to update total expenses display
function updateTotalExpenses() {
    const totalExpensesDisplay = document.querySelector('.expenses-total');
    totalExpensesDisplay.textContent = budget.calculateTotalExpenses();
}



// Function to handle form submission
function handleFormSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior
    
    // Retrieve input elements for income and expense
    const incomeAmountInput = document.getElementById('amount-i');
    const incomeDescriptionInput = document.getElementById('income-txt');
    const expenseAmountInput = document.getElementById('amount-e');
    const expenseDescriptionInput = document.getElementById('expense-txt');
 
    // Process income if amount is provided
    if (incomeAmountInput.value.trim() !== '') {
        const incomeAmount = incomeAmountInput.value.trim();
        
        // Validate income amount
        if (!/^\d+(\.\d{0,2})?$/.test(incomeAmount)) {
            alert('Please enter a valid number for income amount.'); // Alert if the income amount is invalid
            clearInputs(incomeAmountInput, incomeDescriptionInput);
            return;
        }
        
        const incomeDescription = incomeDescriptionInput.value.trim(); // Extract income description
        
        // Validate income description
        if (incomeDescription === '') {
            alert('Please enter a description for income.'); // Alert if income description is empty
            clearInputs(incomeAmountInput, incomeDescriptionInput);
            return;
        }
        
        // Add income to budget and update display
        budget.addIncome(incomeDescription, parseFloat(incomeAmount));
        updateIncomeHistory(incomeDescription, parseFloat(incomeAmount));
    }
 
    // Process expense if amount is provided
    if (expenseAmountInput.value.trim() !== '') {
        const expenseAmount = expenseAmountInput.value.trim();
        
        // Validate expense amount
        if (!/^\d+(\.\d{0,2})?$/.test(expenseAmount)) {
            alert('Please enter a valid number for expense amount.'); // Alert if the expense amount is 
            clearInputs(expenseAmountInput, expenseDescriptionInput);
            return;
        }
        
        const expenseDescription = expenseDescriptionInput.value.trim(); // Extract expense description
        
        // Validate expense description
        if (expenseDescription === '') {
            alert('Please enter a description for expense.'); // Alert if expense description is empty
            clearInputs(expenseAmountInput, expenseDescriptionInput);
            return;
        }
        
        // Add expense to budget and update display
        budget.addExpense(expenseDescription, parseFloat(expenseAmount));
        updateExpenseHistory(expenseDescription, parseFloat(expenseAmount));
    }
 
    // Update total display
    updateTotalDisplay();
 
    // Clear input fields
    incomeAmountInput.value = '';
    incomeDescriptionInput.value = '';
    expenseAmountInput.value = '';
    expenseDescriptionInput.value = '';
 }

 //Function to clear input fields
 function clearInputs(amountInput, descriptionInput) {
    amountInput.value - '';
    descriptionInput.value = '';
 }
 
 
 

//===============ACCORDION HISTORY SECTION===============
// Function to update income history
function updateIncomeHistory(description, amount) {
    const incomeEntries = document.getElementById('income-entries');
    const entryElement = document.createElement('p');
    entryElement.textContent = `${description}: $${amount}`;
    incomeEntries.appendChild(entryElement);
}

// Function to update expense history
function updateExpenseHistory(description, amount) {
    const expenseEntries = document.getElementById('expense-entries');
    const entryElement = document.createElement('p');
    entryElement.textContent = `${description}: $${amount}`;
    expenseEntries.appendChild(entryElement);
}

// Event listener for form submission
const form = document.querySelector('.budget-tracker');
form.addEventListener('submit', handleFormSubmit);

// Initial update of total balance display
updateTotalDisplay();