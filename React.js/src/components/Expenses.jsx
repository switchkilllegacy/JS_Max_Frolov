import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </div>
  );
};

export default Expenses;
