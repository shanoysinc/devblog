import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	content: String,
	tags: [String],
	createAt: {
		type: Date,
		default: new Date(),
	},
});

// const Post =
export default mongoose.models.Post || mongoose.model("Post", userSchema);
