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
.tag {
  float: right;
  font-family: cursive;
  font-size: 40px;
  font-weight: bold;
}
</style>

<template>
  <div>
    <NavBar />
    <div class="tag">
      Make your time count....
    </div>
    <ItineraryForm :cities="cities" />
  </div>
</template>
