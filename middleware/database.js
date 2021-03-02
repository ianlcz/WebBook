import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
require("dotenv/config");

const client = new MongoClient(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = async (req, res, next) => {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("WebBook");
  return next();
};

const middleware = nextConnect();

middleware.use(database);

export default middleware;
