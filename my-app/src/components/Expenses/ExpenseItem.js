import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  //props is one parameter that is an object that hold all the attributes as properties

  const [date, setDate] = useState(props.date); //Hooks must be called directly in component functions
  //1st name describes the current value
  //2nd name describes function that updates the value
  const dateHandler = () => {
    setDate(new Date());
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <button onClick={dateHandler}>Change Date</button>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
    </Card >
  );
}

export default ExpenseItem;