<template>
  <div class="newmain">
    <div class="main">
      <ItineraryCard
        v-for="(itinerary, index) in itinerary.itinerary"
        :key="`itinerary-${index}`"
        :itinerary="itinerary"
      />
    </div>
    <div class="board">
      Hope you are happy with the itinerary.....Otherwise we can try to rebuild
      another one
      <button>Rebuild</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ItineraryCard from "../components/ItineraryCard";

export default {
  components: {
    ItineraryCard
  },
  computed: mapState(["itinerary"])
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
  height: 200px;
  width: 500px;
  border: 1px solid black;
  margin-top: 10px;
}
</style>
