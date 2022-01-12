// Data/State is needed here
//Pass state from App.js to Expenses via props

import './Expenses.css'
import React, { useState } from 'react'
import linq from "linq";
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [enteredExpenseFilter, setEnteredExpenseFilter] = useState('2022',);

    const expenseFilterChangeHandler = (selectedYear) => {
        setEnteredExpenseFilter(selectedYear)
    }

    //Filtering Solution without LINQ
    const filteredExpenses = props.items.filter(ex => ex.date.getFullYear().toString() === enteredExpenseFilter)

    //LINQ solution
    const filteredArray = linq.from(props.items).where(ex => ex.date.getFullYear().toString() === enteredExpenseFilter).toArray();

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={enteredExpenseFilter} onChangeFilter={expenseFilterChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div >
    );
}

export default Expenses;