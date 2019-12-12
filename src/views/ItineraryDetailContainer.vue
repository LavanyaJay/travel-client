<template>
  <div class="newmain">
    <router-link :to="{ name: 'ity_form' }">Prev Page</router-link>
    <div class="main">
      <ItineraryCard
        v-for="(itinerary, index) in itinerary.itinerary"
        :key="`itinerary-${index}`"
        :itinerary="itinerary"
      />
    </div>
    <div class="board">
      <h3 class="heading">Your trip schedule is as follows:</h3>
      <div
        class="schedule"
        v-for="(itinerary, index) in itinerary.itinerary"
        :key="`itinerary-${index}`"
      >
        <p color="blue">{{ index + 1 }}. {{ itinerary.placeName }}</p>
        <p>From:</p>
        <p>To:</p>
      </div>
      <button v-on="onClick">Rebuild</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ItineraryCard from "../components/ItineraryCard";

export default {
  props: ["name"],
  components: {
    ItineraryCard
  },
  computed: mapState(["itinerary"]),
  methods: {
    onClick(evt) {
      evt.preventDefault();
      console.log(this.form.city);
      alert(JSON.stringify(this.form));
      this.$store
        .dispatch("createItinerary", this.form)
        .then(() => {
          //alert("Ity created successfully");
          this.$router.push({
            name: "itinerary"
          });
          this.form = this.createNewForm();
        })
        .catch({});
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: left;
}
.newmain {
  display: flex;
  background-image: none;
  background: white;
  height: 700px;
  margin-top: 50px;
}
.board {
  background-color: lightblue;
  color: black;
  height: 700px;
  width: 500px;
  border: 1px solid black;
  margin-top: 10px;
}
.schedule {
  font-weight: bold;
  font-family: fantasy;
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 50px;
}
button {
  margin-left: 200px;
}
.heading {
  font-family: cursive;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
</style>
