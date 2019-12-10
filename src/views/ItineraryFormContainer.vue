<template>
  <ItineraryForm :cities="cities" />
</template>

<script>
import ItineraryForm from "../components/ItineraryForm";
import { mapState } from "vuex";

export default {
  components: {
    ItineraryForm
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
</style>
