<template>
  <div class="ity_card">
    <b-card-body>
      <b-card-title> {{ itinerary.attraction.placeName }} </b-card-title>

      <b-card-sub-title
        ><star-rating
          v-model="itinerary.attraction.rating"
          star-size="20"
          read-only="true"
        ></star-rating
      ></b-card-sub-title>
      <b-card-text> Duration: {{ itinerary.attraction.duration }} </b-card-text>
      <b-card-text class="bg-info">
        StartTime: {{ itinerary.fromTime }}
      </b-card-text>
      <b-card-text class="bg-info">
        EndTime: {{ itinerary.toTime }}
      </b-card-text>

      <b-card-footer class="footer" @click="deleteAttraction"
        >Not interested <font-awesome-icon icon="trash"
      /></b-card-footer>
    </b-card-body>
    <div class="image">
      <img :src="itinerary.attraction.placeImage" alt="" class="img" />
      <b-button id="show-btn" @click="showModal" variant="primary"
        >More details</b-button
      >
      <b-modal
        ref="my-modal"
        hide-footer
        :title="itinerary.attraction.placeName"
      >
        <div class="d-block text-center">
          <img :src="itinerary.attraction.placeImage" alt="" />
          <p class="content">{{ itinerary.attraction.placeDesc }}</p>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
          >Close</b-button
        >
      </b-modal>
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
    itinerary: Object
  },

  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    deleteAttraction() {
      console.log("Hi");
      this.$store
        .dispatch("deleteItinerary", this.itinerary)
        .then(() => {
          alert("Ity deleted successfully");
        })
        .catch({});
    }
  }
};
</script>

<style scoped>
button {
  background: "red";
  float: left;
}
time {
  font-weight: bold;
}
.ity_card {
  background-color: linen;

  transition: all 0.2s linear;
  width: 800px;
  color: black;
  display: flex;
}
.ity-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.image {
  height: inherit;
  width: 300px;
  margin-bottom: 5px;
}
.img {
  margin-bottom: 5px;
}
.content {
  text-align: left;
}
.footer {
  width: 200px;
  float: right;
  height: 40px;
}

.star {
  background: black;
}
</style>
