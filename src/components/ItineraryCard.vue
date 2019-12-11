<template>
  <div class="ity_card">
    <b-card-body>
      <b-card-title
        >: {{ itinerary.placeName }} <button>x</button>
      </b-card-title>
      <b-card-sub-title
        ><star-rating
          v-model="itinerary.rating"
          star-size="20"
          glow="2"
        ></star-rating
      ></b-card-sub-title>
      <b-card-text> Duration: {{ itinerary.duration }} </b-card-text>
      <b-button href="#" variant="primary">More details</b-button>
    </b-card-body>
    <div class="image">
      <img :src="itinerary.placeImage" alt="" />
    </div>
  </div>
</template>

<script>
import { BCardBody } from "bootstrap-vue";
import StarRating from "vue-star-rating";

export default {
  components: {
    "b-card-body": BCardBody,
    StarRating
  },
  props: {
    itinerary: {
      type: Object
    }
  }
};
</script>

<style scoped>
button {
  background: "red";
}
.ity_card {
  background-color: lightblue;
  margin-bottom: 10px;
  transition: all 0.2s linear;
  width: 700px;
  color: black;
  display: flex;
}
.ity-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.image {
  height: 180px;
  width: 300px;
  border: 1px solid black;
}
</style>
