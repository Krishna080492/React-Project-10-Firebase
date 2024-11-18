import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://books-firebase-project10-default-rtdb.firebaseio.com/books",
});

export default apiInstance;
