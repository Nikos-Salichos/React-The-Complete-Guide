import ExpenseItem from './components/Expenses/ExpenseItem';
import Investment from './components/Expenses/Investments';

const App = () => {

  //4 expense object items
  const expenses = [
    { id: 1, title: 'Gasoline Monthly', amount: 150, date: new Date(2021, 2, 28) },
    { id: 2, title: 'Car insurance 6 Months', amount: 200, date: new Date(2021, 2, 30) },
    { id: 3, title: 'Food Monthly', amount: 200, date: new Date(2021, 2, 25) },
    { id: 4, title: 'Gifts', amount: 40, date: new Date(2021, 2, 22) },
    { id: 5, title: 'Telephone Bills', amount: 10, date: new Date(2021, 2, 23) },
  ];


  const investments = [
    { id: 1, title: 'ETFs', amount: 100, date: new Date(2021, 2, 10) },
    { id: 2, title: 'CryptoCurrencies', amount: 50, date: new Date(2021, 2, 20) },
    { id: 3, title: 'Stocks', amount: 150, date: new Date(2021, 2, 29) },
    { id: 4, title: 'Bonds', amount: 30, date: new Date(2021, 2, 30) }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} />
      {/* <Investment title={investments[0].title} amount={investments[0].amount} date={investments[0].date} />
      <Investment title={investments[1].title} amount={investments[1].amount} date={investments[1].date} />
      <Investment title={investments[2].title} amount={investments[2].amount} date={investments[2].date} />
      <Investment title={investments[3].title} amount={investments[3].amount} date={investments[3].date} /> */}
    </div>
  );
}

export default App;