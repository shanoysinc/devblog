import { fetchPost, addPost } from "./postSlice";
import * as postApi from "../../api/post";
import { Post } from "../../shared/interfaces/Post";

export const fetchAllPost = () => async (dispatch) => {
	const { data } = await postApi.fetchAllPost();
	console.log("fecth data", data);

	return dispatch(fetchPost(data.posts));
};

export const createPost = (newPost: Post) => async (dispatch) => {
	const { data } = await postApi.createPost(newPost);
	console.log("created post", data.post);

	return dispatch(addPost(data.post));
};
