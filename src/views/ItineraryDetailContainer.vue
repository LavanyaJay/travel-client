<template>
  <div>
    <div class="header">
      {{this.name}}
      <router-link to="/">
        <div class="home">Trip-A-Day Planner</div>
      </router-link>
    </div>

    <div class="newmain">
      <div class="main" v-if="itinerary.itinerary.length > 0">
        <p class="para">Hope you enjoy our schedule:</p>
        <ItineraryCard
          v-for="(itinerary, index) in itinerary.itinerary"
          :key="index"
          :itinerary="itinerary"
          :firstRec="index"
        />
        <button class="button" v-on:click="onClick()">Rebuild New Itinerary</button>
      </div>
      <div
        class="alert"
        v-if="itinerary.itinerary.length === 0"
      >Sorry, we could'nt find anything suitable! Please refine your search !</div>
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

  created() {
    this.$store.dispatch("fetchItinerary");
  },
  computed: mapState(["itinerary"], ["form"]),
  methods: {
    onClick() {
      this.$store
        .dispatch("fetchAttractions", this.$store.state.form.form)
        .then(() => this.$store.dispatch("fetchItinerary"));
    }
  }
};
</script>

<style scoped>
.header {
  height: 200px;
  width: 1280px;
  border: 1px solid black;
  margin-left: 0;
  margin-right: 0;
  padding-left: 30px;
  padding-right: 0;
  background-image: url("https://image.shutterstock.com/image-photo/roman-colloseum-rome-italy-evening-260nw-1479400997.jpg");
  font-family: cursive;
  font-size: 100px;
  color: black;
}
.main {
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: left;
  color: black;
  font-size: 18px;
  margin-left: 150px;
  margin-top: 20px;
}
.para {
  margin-bottom: 10px;
  font-family: cursive;
  font-size: 20px;
}
.newmain {
  display: flex;
  background-image: none;
  background: rgb(235, 209, 188);
  height: 1800px;
  width: inherit;
}

.home {
  font-weight: bold;
  font-family: fantasy;
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 50px;
}
.button {
  margin-left: 300px;
  width: 200px;
  background-color: green;
  color: whitesmoke;
  margin-top: 10px;
}
.heading {
  font-family: cursive;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.alert {
  font-family: "Times New Roman", Times, serif;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  background-color: black;
  height: 50px;
  width: 900px;
  margin-left: 150px;
  margin-top: 180px;
  font-size: 20px;
}
</style>
