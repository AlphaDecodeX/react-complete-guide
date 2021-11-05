import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 ||
            enteredAmount < 1 || enteredAmount > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddCart(enteredAmountNumber);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount"
            ref={amountInputRef}
            input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
}

export default MealItemForm;