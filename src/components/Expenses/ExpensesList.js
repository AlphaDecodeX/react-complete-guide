import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__faalback">
            Found No expenses.
        </h2>
    }
    // Both JSX code and Elements can be assigned or stored in the variables.

    return (

        <ul className="expenses-list">

            {props.items.map((element) => (
                <ExpenseItem
                    key={element.id}
                    title={element.title}
                    amount={element.amount}
                    date={element.date} />
            ))}
        </ul>)
}

export default ExpensesList;