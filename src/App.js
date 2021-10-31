import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Car Insurance", amount: 41, date: new Date(2020, 5, 2) },
  { id: "e2", title: "Bike Insurance", amount: 14, date: new Date(2020, 6, 7) },
  { id: "e3", title: "Monitor Buy", amount: 64, date: new Date(2022, 2, 4) },
  { id: "e4", title: "Stand Buy", amount: 74, date: new Date(2021, 5, 7) },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div >
  );
}

export default App;
