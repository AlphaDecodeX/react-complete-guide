import "./ExpenseForm.css";
import { useState } from "react";
// import "./NewExpense"

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [cancel, setCancel] = useState(true);
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    function titleChangedHandler(event) {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // Safer way to operate on latest States without any delay
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    }
    function amountChangedHandler(event) {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }
    function dateChangedHandler(event) {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }


    function ChangeCancel(event) {
        // console.log(event);
        if (cancel === true) {
            setCancel(false);
        } else {
            setCancel(true);
        }
    }

    if (cancel) {
        return (<div>
            <button className="new-expense__actions" onClick={ChangeCancel}>Add New Expenses</button>
        </div>)
    } else {
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangedHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangedHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangedHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
                <div className="new-expense__actions">
                    <button onClick={ChangeCancel}>Cancel</button>
                </div>
            </form>
        )
    }
}

export default ExpenseForm;