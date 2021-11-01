import React, { useState } from "react";
import Card from "../UI/Card"
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [error, setError] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: 'input',
                message: "Please enter a valid name and age"
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age'
            })
            return;
        }
        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title}
                message={error.message} onConfirm={errorHandler}
            />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="username" type="text"
                        value={enteredAge}
                        onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;