import React from 'react'
import MainNavigation from './MainNavigation'
import classes from "./Layout.module.css"
import { Fragment } from 'react'

function Layout(props) {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
