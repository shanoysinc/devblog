import dbConnect from "../../../db/dbConnect";
import Post from "../../../model/Post";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		method,
		query: { id },
	} = req;

	await dbConnect();

	switch (method) {
		case "DELETE":
			try {
				await Post.findByIdAndDelete({ _id: id });

				res.json({ success: true });
			} catch (error) {
				res.status(400).json({ error });
			}
			break;
		case "PATCH":
			try {
				const post = req.body;
				const updatedPost = await Post.findOneAndUpdate(
					{ _id: id },
					post,
					{ new: true }
				);

				res.json({ post: updatedPost });
			} catch (error) {
				res.status(400).json({ error });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
