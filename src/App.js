import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}>
      </ExpenseItem>
    </div >
  );
}

export default App;
