import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./Expense.css";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList list={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
