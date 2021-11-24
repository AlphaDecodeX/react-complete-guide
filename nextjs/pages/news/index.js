// our-domain.com/news/something
import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs"> NextJs is Great </Link>
                </li>
                <li>
                    <Link href="#">Load more... </Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;