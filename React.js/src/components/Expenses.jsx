import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
