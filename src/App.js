import React, { useState } from "react";

import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Rak Buku",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Handphone",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Laptop",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
