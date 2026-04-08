# Financial Calendar

## 1. Project introduction
### 1.1 Overview
This project presents a web-based personal finance tracker that aims to help young people avoid overspending and build better saving habits.

## 1.2 Quick Start
1. Download this repository.
2. Open `Financial_Calendar.html` in any modern web browser (Chrome, Edge, Safari...).

## 2. Core Function
### 2.1 Add a Transaction
1. Select **Expense** or **Income**.
2. Pick a **date** (defaults to today).
3. Enter the **amount**.
4. Choose a **category**.(optional)
5. Add a **description**.(optional)
6. Click **Add Record**.
7. The calendar and monthly summary will update instantly.

### 2.2 View income and expense on a Specific Day
Click on any date in the calendar. A popup will show all records for that day.

### 2.3 Monthly Summary
- The Monthly Statistic area shows **Monthly Income**, **Monthly Expense**, and **Monthly Balance** for the currently displayed month.
- You can also select a specific date range to view the income and expenditure pie chart.

### 2.4 Set a Savings Goal
- You can enter a **goal amount** (e.g., 1000).
- The progress bar and label will update automatically based on your **monthly balance**.
- The goal amount is saved in your browser (localStorage) and persists after closing the browser.

### 2.5 Delete All Data
- Click the **Delete All Data** button. All records will be deleted and cannot be undone.

## 3. Technologies Used
- HTML5, CSS3, JavaScript (ES6)
- IndexedDB (for transaction records)
- Chart.js (for pie charts)
