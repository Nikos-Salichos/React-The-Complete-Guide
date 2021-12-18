import ExpenseItem from './components/ExpenseItem';
import ConsumedFood from './components/Investments';

function App() {

  //4 expense object items
  const expenses = [
    { id: 1, title: 'Gasoline Monthly', amount: 150, date: new Date(2021, 2, 28) },
    { id: 2, title: 'Car insurance 6 Months', amount: 200, date: new Date(2021, 2, 30) },
    { id: 3, title: 'Food Monthly', amount: 200, date: new Date(2021, 2, 25) },
    { id: 4, title: 'Gifts', amount: 40, date: new Date(2021, 2, 22) },
  ];


  const investments = [
    { id: 1, title: 'ETFs', amount: 100, date: new Date(2021, 5, 30) }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      <ConsumedFood title={investments[0].title} amount={investments[0].amount} date={investments[0].date} />
    </div>
  );
}

export default App;
