import axios from "axios";
const url = process.env.NODE_ENV === "production" ? "/attractions" : "http://localhost:5000/attractions";
export default axios.create({
  baseURL: url,
});
