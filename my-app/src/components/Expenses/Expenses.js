// Data/State is needed here
//Pass state from App.js to Expenses via props

import './Expenses.css'
import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {

    const [enteredExpenseFilter, setEnteredExpenseFilter] = useState('2020',);

    const expenseFilterChangeHandler = (selectedYear) => {
        setEnteredExpenseFilter(selectedYear)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={enteredExpenseFilter} onChangeFilter={expenseFilterChangeHandler}></ExpensesFilter>
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            </Card>
        </div>
    );
}

export default Expenses;