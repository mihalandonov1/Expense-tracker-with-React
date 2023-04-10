import "./Expenses.css";
import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const yearHandle = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectYear={yearHandle} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
