import axios from "axios";
import { Post } from "../shared/interfaces/Post";

const url = "http://localhost:3000/api/blog";

export const createPost = (newPost: Post) => axios.post(url, newPost);
export const deletePost = (postId) => axios.delete(`${url}/${postId}`);
