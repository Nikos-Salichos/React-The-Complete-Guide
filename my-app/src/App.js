// This component has access to both involved components
//Parent component

import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

//4 expense object items
const dummyExpenses = [
  { id: 1, title: 'Gasoline Monthly', amount: 150, date: new Date(2022, 2, 28) },
  { id: 2, title: 'Car insurance 6 Months', amount: 200, date: new Date(2021, 2, 30) },
  { id: 3, title: 'Food Monthly', amount: 200, date: new Date(2021, 2, 25) },
  { id: 4, title: 'Gifts', amount: 40, date: new Date(2020, 2, 22) },
  { id: 5, title: 'Telephone Bills', amount: 15, date: new Date(2012, 2, 23) },
];

const App = () => {

  //const [oldState, newStateNameFunction] = useState(currentState)
  const [expenses, SetExpenses] = useState(dummyExpenses)

  //Best way to update state when based on an older snapshot of that same state
  //parameter is the new expense i want to add, 
  const addExpenseHandler = (expense) => {
    SetExpenses(previousExpenses => { return [expense, ...expenses] })
  };



  return (
    <div>
      {/* Call onAddExpense with value of addExpenseHandler */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;