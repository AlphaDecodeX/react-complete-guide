import QuoteList from "../components/quotes/QuoteList"
import React from 'react'
const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Awesome!' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is Nzaare!' }
]

function AllQuotes() {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default AllQuotes
