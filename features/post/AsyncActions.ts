import { fetchPost, addPost } from "./postSlice";
import * as postApi from "../../api/post";
import { Post } from "../../shared/interfaces/Post";

export const fetchAllPost = (post) => async (dispatch) => {
	return dispatch(fetchPost(post));
};

export const createPost = (newPost: Post) => async (dispatch) => {
	const { data } = await postApi.createPost(newPost);
	console.log("created post", data.post);

	return dispatch(addPost(data.post));
};
