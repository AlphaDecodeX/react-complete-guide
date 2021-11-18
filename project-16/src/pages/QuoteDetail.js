import React from 'react'
import { Fragment } from 'react';
import { useParams, Route, Link } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote"

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is Awesome!' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is Nzaare!' }
]

function QuoteDetail() {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if (!quote) {
        return <p>Now Quote Found</p>
    }

    return (

        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail
