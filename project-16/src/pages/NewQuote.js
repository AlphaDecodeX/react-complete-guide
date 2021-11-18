import React from 'react'
import QuoteForm from "../components/quotes/QuoteForm"

function NewQuote() {
    const addQuoteHandler = (quoteData) => {

    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler}>
            New Quote
        </QuoteForm>
    )
}

export default NewQuote
