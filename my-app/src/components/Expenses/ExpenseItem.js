import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  //props is one parameter that is an object that hold all the attributes as properties

  const [title, setTitle] = useState(props.title); //Hooks must be called directly in component functions
  //1st name describes the current value
  //2nd name describes function that updates the value

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title) //console.log is not updated the 1st time it changes state, it updates exactly the next
  }

  var currentDate = new Date();

  const [date, setDate] = useState(props.date);
  const dateHandler = () => {
    setDate(currentDate);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <button onClick={dateHandler}>Change Date</button>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card >
  );
}

export default ExpenseItem;