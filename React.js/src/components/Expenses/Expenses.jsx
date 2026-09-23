import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
    console.log('Your data in Expenses.js ' + filteredYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear,
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => {
        return <ExpenseItem expenseData={expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expenses;
