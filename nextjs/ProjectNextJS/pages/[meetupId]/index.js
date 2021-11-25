import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return (
        <MeetupDetail image={props.meetupData.image}
            title={props.meetupData.title} description={props.meetupData.description}
            address={props.meetupData.address} />
    )
}

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://admin:P2mz7fNiZWGWLlHg@cluster0.qvvlw.mongodb.net/tempDb?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: true,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))

    }
}

export async function getStaticProps(context) {
    // fetching the data of single meetup...
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    const client = await MongoClient.connect('mongodb+srv://admin:P2mz7fNiZWGWLlHg@cluster0.qvvlw.mongodb.net/tempDb?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails;