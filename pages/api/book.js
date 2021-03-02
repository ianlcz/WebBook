// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let books = await req.db.collection("Book").find({}).toArray();
  res.json(books);
});

export default handler;
