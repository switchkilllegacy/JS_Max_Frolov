import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem data={props.expenses[0]} />
      <ExpenseItem data={props.expenses[0]} />
    </Card>
  );
};

export default Expenses;
