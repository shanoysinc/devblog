import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// return Object  type from mongoose
interface Post {
	_id: string;
	title: string;
	tags: string[];
	createAt: Date;
	content: string;
	__v: number;
}

const postSlice = createSlice({
	name: "post",
	initialState: [] as Post[],
	reducers: {
		fetchPost: (state, action: PayloadAction<Post[]>) => action.payload,
		addPost: (state, action) => [action.payload, ...state],
		deleteSelectedPost: (state, action) =>
			state.filter((post) => post._id !== action.payload),
	},
});

const { actions, reducer } = postSlice;
export const { fetchPost, addPost, deleteSelectedPost } = actions;

export default reducer;
