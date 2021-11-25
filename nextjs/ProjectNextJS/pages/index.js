import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Canada.jpg?h=f2fcf546&itok=HpXJ6X1n',
        address: 'Canada, Ontorio',
        description: 'This is our First meetup'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Canada.jpg?h=f2fcf546&itok=HpXJ6X1n',
        address: 'Canada, Ontorio',
        description: 'This is our Second meetup'
    }
]

function Homepage(props) {
    return (
        <MeetupList meetups={props.meetups} />
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
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    };
}

export default Homepage
