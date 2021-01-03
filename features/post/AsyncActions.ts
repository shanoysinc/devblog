import { fetchPost, addPost, deleteSelectedPost } from "./postSlice";
import * as postApi from "../../api/post";
import { Post } from "../../shared/interfaces/Post";

export const fetchAllPost = (post) => async (dispatch) => {
	return dispatch(fetchPost(post));
};

export const createPost = (newPost: Post) => async (dispatch) => {
	try {
		const { data } = await postApi.createPost(newPost);

		return dispatch(addPost(data.post));
	} catch (err) {
		console.log(err);
	}
};

export const deletePost = (postId) => async (dispatch) => {
	try {
		const { data } = await postApi.deletePost(postId);

		return dispatch(deleteSelectedPost(postId));
	} catch (err) {
		console.log(err);
	}
};
