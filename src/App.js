import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 41, date: new Date(2020, 5, 2) },
    { id: "e2", title: "Bike Insurance", amount: 14, date: new Date(2020, 3, 7) },
    { id: "e3", title: "Monitor Buy", amount: 64, date: new Date(2020, 8, 7) },
    { id: "e4", title: "Stand Buy", amount: 74, date: new Date(2020, 5, 7) },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div >
  );
}

export default App;
