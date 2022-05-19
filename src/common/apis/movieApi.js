import axios from "axios";
// axios create for the api

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});
