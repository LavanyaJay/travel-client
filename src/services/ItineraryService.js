import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:4000"
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
    console.log(typeof name);
    const newName = name.toString();
    return apiClient.post(`/rejectAttraction`, newName);
  }
};
