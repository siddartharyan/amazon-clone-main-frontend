import axios from "axios";
const url = axios.create({
  baseURL: "http://localhost:8081"
});
export default url;
