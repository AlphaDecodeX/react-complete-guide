import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";
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

function Homepage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setLoadedMeetups(DUMMY_MEETUPS);
    }, [])

    return (
        <MeetupList meetups={loadedMeetups} />
    )
}

export default Homepage
