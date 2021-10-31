import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [year, setYear] = useState("2020");
    const Year = (year) => {
        // console.log(year);
        setYear(year);
        // console.log(props.items[0].date.getFullYear());
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })

    return (
        <div>
            <Card className='expenses'>
                {/* {console.log("I am running")} */}
                <ExpensesFilter storeSelectedYear={Year} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;