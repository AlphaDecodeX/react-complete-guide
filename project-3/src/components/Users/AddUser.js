import React, { useState } from "react";
import Card from "../UI/Card"
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            return;
        }
        if (+enteredAge < 1) {
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
    return (
        <div>
            <ErrorModal title="An Error Occured"
                message="Something went Wrong"
            />
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