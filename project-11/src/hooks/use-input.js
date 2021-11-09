import React from 'react'
import { useState } from 'react';

function useInput(validateValue) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const ValueIsValid = validateValue(enteredValue);
    const hasError = !ValueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: ValueIsValid,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput
