import axios from "axios";
import { Post } from "../shared/interfaces/Post";

const url = "http://localhost:3000/api/blog";
export const fetchAllPost = () => axios.get(url);
export const createPost = (newPost: Post) => axios.post(url, newPost);
