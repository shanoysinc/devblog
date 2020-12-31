import axios from "axios";

const url = "http://localhost:3000/api/blog";
export const fetchAllPost = () => axios.get(url);
