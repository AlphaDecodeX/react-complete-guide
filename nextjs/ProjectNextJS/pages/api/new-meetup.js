import { MongoClient } from "mongodb";
// /api/new-meet-up

async function handler(req, res) {
    // P2mz7fNiZWGWLlHg
    if (req.method === "POST") {
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://admin:P2mz7fNiZWGWLlHg@cluster0.qvvlw.mongodb.net/tempDb?retryWrites=true&w=majority')
        const db = client.db();
        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();

        res.status(201).json({ message: "Meetup Inserted" });
    }
}

export default handler;