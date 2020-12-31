import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as postApi from "../../api/post";

interface Post {
	_id: string;
	tags: string[];
	createAt: Date;
	content: string;
	__v: number;
}

// const fetchAllPost = createAsyncThunk("post/fetchAllPost", async () => {
// 	const { data } = await postApi.fetchAllPost();
// 	return data;
// });

const postSlice = createSlice({
	name: "post",
	initialState: [] as Post[],
	reducers: {
		fetchPost: (state, action: PayloadAction<Post[]>) => action.payload,
	},
	// extraReducers: {
	// 	[fetchAllPost.fulfilled]: (state, action) => action.payload,
	// },
});

const { actions, reducer } = postSlice;
const { fetchPost } = actions;

export const fetchAllPost = () => async (dispatch) => {
	const { data } = await postApi.fetchAllPost();
	console.log("fecth data", data);

	return dispatch(fetchPost(data.posts));
};

export default reducer;
