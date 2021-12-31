import React from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    // function that get enteredExpenseData as parameter which is the object from the form
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //key to value pairs
            id: Math.random().toString() //random Id
        }
        props.onAddExpense(expenseData)
    }

    return <div className="new-expense">
        {/* onSaveExpenseData value for this prop is a function that triggers when form submit
            function receives saveExpenseDataHandler as value*/}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>

    </div>
};

export default NewExpense;