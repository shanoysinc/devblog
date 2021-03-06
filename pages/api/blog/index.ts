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

				const posts = await Post.find({});

				res.json({ posts });
			} catch (error) {
				console.log("get error");

				res.status(400).json({ error });
			}
			break;
		case "POST":
			try {
				const post = req.body;
				console.log(post);

				const newPost = new Post(post);
				await newPost.save();

				res.json({ post: newPost });
			} catch (error) {
				res.status(400).json({ error });
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
};
