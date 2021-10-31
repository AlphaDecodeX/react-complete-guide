import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
    const [year, setYear] = useState("2020");
    const Year = (year) => {
        console.log(year);
        setYear(year);
        // console.log(props.items[0].date.getFullYear());
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter storeSelectedYear={Year} />
                {filteredExpenses.map((element) => (
                    <ExpenseItem
                        key={element.id}
                        title={element.title}
                        amount={element.amount}
                        date={element.date} />
                ))};
            </Card>
        </div>
    )
}

export default Expenses;