import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">Items Not Founds.</h2>;
  }

  return (
    <ul className="expense-list">
      {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
