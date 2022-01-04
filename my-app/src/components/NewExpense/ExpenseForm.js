import React, { useState } from "react"
import './ExpenseForm.css'
import './ExpenseButton.js'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('',);
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        //when i execute it by click submit form , it triggers the NewExpense.js.
        //ExpenseForm is child Component and Parent Component is NewExpense.js
        props.onSaveExpenseData(expenseData); //execute function that takes object as parameter

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };



    return <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add expense</button>
            <button type="button" onClick={props.onCancel} >Cancel</button>
        </div>
    </form>



}

export default ExpenseForm;