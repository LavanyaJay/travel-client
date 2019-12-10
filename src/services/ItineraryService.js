import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
export default {
  getCategory() {
    return apiClient.get("/category");
  },
  getEvent(id) {
    console.log("id in service: ", id);
    return apiClient.get(`/events/${id}`);
  },
  postEvent(event) {
    return apiClient.post(`/events`, event);
  }
};
