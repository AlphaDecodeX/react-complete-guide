import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

import MeetupList from "../components/meetups/MeetupList";

function Homepage(props) {
    return (
        <Fragment>
            <Head>
                <title>Meetups</title>
                <meta name="description"
                    content="A demo of NEXTJS" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // can fetch data from API or Database
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

// If data not changes at faster rate.....

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://admin:P2mz7fNiZWGWLlHg@cluster0.qvvlw.mongodb.net/tempDb?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
}

export default Homepage
