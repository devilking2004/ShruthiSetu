import type { VercelRequest, VercelResponse } from "@vercel/node";
import connectDB from "../lib/db";
import Knowledge from "../models/Knowledge";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  await connectDB();

  if (req.method === "GET") {
    const data = await Knowledge.find();
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const knowledge = await Knowledge.create(req.body);
    return res.status(201).json(knowledge);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
