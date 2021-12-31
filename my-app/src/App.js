import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  //4 expense object items
  const expenses = [
    { id: 1, title: 'Gasoline Monthly', amount: 150, date: new Date(2021, 2, 28) },
    { id: 2, title: 'Car insurance 6 Months', amount: 200, date: new Date(2021, 2, 30) },
    { id: 3, title: 'Food Monthly', amount: 200, date: new Date(2021, 2, 25) },
    { id: 4, title: 'Gifts', amount: 40, date: new Date(2021, 2, 22) },
    { id: 5, title: 'Telephone Bills', amount: 15, date: new Date(2021, 2, 23) },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      {/* Call onAddExpense with value of addExpenseHandler */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;