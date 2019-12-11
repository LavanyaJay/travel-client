<template>
  <div>
    <NavBar />
    <div class="tag">
      We help you to see the world.............!!!
    </div>
    <ItineraryForm :cities="cities" />
  </div>
</template>

<script>
import ItineraryForm from "../components/ItineraryForm";
import { mapState } from "vuex";
import NavBar from "../components/NavBar";

export default {
  components: {
    ItineraryForm,
    NavBar
  },
  created() {
    this.$store.dispatch("fetchCities");
  },
  computed: {
    ...mapState(["cities"])
  }
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
}

.ityForm {
  background-color: green;
}

.tag {
  float: right;
  font-family: cursive;
  font-size: 40px;
  font-weight: bold;
}
</style>
