import dbConnect from "../../../db/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../model/Post";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	await dbConnect();
	switch (method) {
		case "GET":
			try {
				console.log("success");

				const post = await Post.find({});

				res.json({ post });
			} catch (error) {
				console.log("get error");

				res.json({ error });
			}
			break;
		case "POST":
			try {
				const content = req.body;
				const newPost = new Post(content);
				await newPost.save();
				console.log(newPost);

				res.json({ post: newPost });
			} catch (error) {
				res.json({ error });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
