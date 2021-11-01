import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from "./ErrorModal.module.css"

function ErrorModal(props) {
    return (
        <div>
            <div className={classes.backdrop} onCLick={props.onConfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.contnet}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.action}>
                    <Button onCLick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal
