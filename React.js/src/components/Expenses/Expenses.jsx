import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    console.log('Your data in Expenses.js ' + year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
