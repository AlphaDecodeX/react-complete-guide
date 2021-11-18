import React from 'react'
import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'

function QuoteDetail() {
    const params = useParams();
    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <p>Quote Detials Page of {params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail
