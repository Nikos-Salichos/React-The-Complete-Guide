import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const expenseFilterChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    let currentYear = new Date().getFullYear()

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={expenseFilterChangeHandler}>
                    <option value={currentYear}>{currentYear}</option>
                    <option value={currentYear - 1}>{currentYear - 1}</option>
                    <option value={currentYear - 2}>{currentYear - 2}</option>
                    <option value={currentYear - 3}>{currentYear - 3}</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;