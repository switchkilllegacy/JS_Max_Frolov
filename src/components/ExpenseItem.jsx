import './ExpenseItem.css';

const ExpenseItem = () => {
  const date = new Date(2024, 10, 12);
  const title = 'New Book';
  const price = 30.99;
  return (
    <div className="expense-item">
      <div>{date.toString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
