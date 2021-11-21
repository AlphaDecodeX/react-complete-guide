import QuoteList from "../components/quotes/QuoteList"
import React from 'react'
import useHttp from "../hooks/use-http"
import { getAllQuotes } from "../lib/api"
import { useEffect } from "react"
import LoadingSpinner from "../components/UI/LoadingSpinner"
import NoQuotesFound from "../components/quotes/NoQuotesFound"



function AllQuotes() {
    const { sendRequest, status, data: loadedQuotes, error } =
        useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    },
        [sendRequest])

    if (status === 'pending') {
        return <div className="centered"><LoadingSpinner /></div>
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }
    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }
    return (
        <QuoteList quotes={loadedQuotes} />
    )
}

export default AllQuotes
