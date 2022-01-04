// Data/State is generated here
// Lifting state from this component to App.js componenent

import React, { useState } from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }


    // function that get enteredExpenseData as parameter which is the object from the form
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //key to value pairs
            id: Math.random().toString() //random Id
        }
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }

    return <div className="new-expense">
        {/* onSaveExpenseData value for this prop is a function that triggers when form submit
            function receives saveExpenseDataHandler as value*/}
        {!isEditing && <button onClick={startEditingHandler}>Add expense</button>}
        {isEditing && (<ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
        ></ExpenseForm>)}
    </div>
};

export default NewExpense;