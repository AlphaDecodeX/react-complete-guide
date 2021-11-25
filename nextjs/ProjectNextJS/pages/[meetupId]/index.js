import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail image={"https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Canada.jpg?h=f2fcf546&itok=HpXJ6X1n"}
            title={"First Meetup"} description={"First meetup is here"}
            address={"Canada Ontorio"} />
    )
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                },
                params: {
                    meetupId: 'm2'
                },
            }
        ]
    }
}

export async function getStaticProps(context) {
    // fetching the data of single meetup...
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Canada.jpg?h=f2fcf546&itok=HpXJ6X1n",
                title: "First Meetup",
                description: "First meetup is here",
                address: "Canada Ontorio",
                id: meetupId
            }
        }
    }
}

export default MeetupDetails;