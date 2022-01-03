// Data/State is needed here
//Pass state from App.js to Expenses via props

import './Expenses.css'
import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import linq from "linq";

function Expenses(props) {

    const [enteredExpenseFilter, setEnteredExpenseFilter] = useState('2022',);

    const expenseFilterChangeHandler = (selectedYear) => {
        setEnteredExpenseFilter(selectedYear)
    }

    //Filtering Solution without LINQ
    const filteredExpenses = props.items.filter(ex => ex.date.getFullYear().toString() === enteredExpenseFilter)

    //LINQ solution
    const filteredArray = linq.from(props.items).where(ex => ex.date.getFullYear().toString() === enteredExpenseFilter).toArray();

    let expensesContent = <p>No expenses found</p>

    if (filteredArray.length > 0) {
        expensesContent = filteredArray.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}></ExpenseItem>)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={enteredExpenseFilter} onChangeFilter={expenseFilterChangeHandler}></ExpensesFilter>
                {expensesContent}
            </Card>
        </div >
    );
}

export default Expenses;