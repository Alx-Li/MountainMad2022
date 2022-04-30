import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const DATABASE_NAME = process.env.DATABASE_NAME;
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

  if (req.method === "POST") {
    const client = await MongoClient.connect(
      process.env.MONGO_URL
      //`mongodb+srv://test:1234@mountain.rpwsn.mongodb.net/Grandma?retryWrites=true&w=majority`
    );
    const db = client.db();
    const mealsCollection = db.collection("meals");
    await mealsCollection.insertOne(req.body);

    client.close();

    res.status(201).send({ Message: "Meal inserted" });
  }
};

export default handler;
