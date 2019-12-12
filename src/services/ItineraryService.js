import axios from "axios";
//import VueFetch from "vue-fetch";
const apiClient = axios.create({
  baseURL: "http://localhost:4000",
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
    console.log(data);
    return apiClient.post(`/itinerary`, data);
  },
  addRejectedAttraction(name) {
    console.log(name);
    const data = { name: name };
    return apiClient.post(`/rejectAttraction`, data);
  }
};
