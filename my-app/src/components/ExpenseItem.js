import './ExpenseItem.css'

function ExpenseItem(props) {
  //props is one parameter that is an object that hold all the attributes as properties

  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 300;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
    </div>
  );
}

export default ExpenseItem;