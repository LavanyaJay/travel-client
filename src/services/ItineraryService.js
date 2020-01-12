import axios from "axios";
//import VueFetch from "vue-fetch";
const apiClient = axios.create({
  //baseURL: "http://localhost:4000"
  baseURL: "https://young-river-49300.herokuapp.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});
export default {
  getCity() {
    return apiClient.get("/city");
  },
  computeItinerary(data) {
    return apiClient.post(`/attraction`, data);
  },
  addRejectedAttraction(name) {
    const data = { name: name };
    return apiClient.post(`/rejectAttraction`, data);
  },
  getItinerary() {
    return apiClient.get("/itinerary");
  },
  clearRejects() {
    return apiClient.delete(`/deletereject`);
  }
};
