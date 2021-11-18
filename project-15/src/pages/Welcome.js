import React from 'react'
import { Route } from 'react-router'

function Welcome() {
    return (
        <section>
            <h1>Welcome Page</h1>
            <Route path="/welcome/new-user">
                <p>Welcome New Buddy</p>
            </Route>
        </section>
    )
}

export default Welcome
