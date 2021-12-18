import ExpenseItem from './components/ExpenseItem';

function App() {

  //4 expense object items
  const expenses = [
    { id: 1, title: 'Gasoline Monthly', amount: 150, date: new Date(2021, 2, 28) },
    { id: 2, title: 'Car insurance 6 Months', amount: 200, date: new Date(2021, 2, 30) },
    { id: 3, title: 'Food Monthly', amount: 200, date: new Date(2021, 2, 25) },
    { id: 4, title: 'Gifts', amount: 20, date: new Date(2021, 2, 22) },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[0].date}></ExpenseItem>

    </div>
  );
}

export default App;
