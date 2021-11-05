import React from 'react'
import classes from "./Modal.module.css"
import { ReactDOM } from 'react-dom';
import reactDom from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} />
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />)}
            {ReactDOM.createPortal(<ModalOverlay>{
                props.children
            }</ModalOverlay>)}
        </React.Fragment>
    )
}

export default Modal
