<template>
  <div class="main">
    <form @submit="onSubmit">
      <h3>Which is your city?</h3>
      <label>Select a city</label>
      <select v-model="form.city">
        <option v-for="city in cities" :key="city">{{ cat }}</option>
      </select>

      <h3>When do you want to start?</h3>

      <label>Select a time</label>
      <date-picker
        v-model="time"
        language="en"
        type="time"
        format="HH:mm a"
        :time-picker-options="timePickerOptions"
        placeholder="Select Time"
      >
      </date-picker>

      <input type="checkbox" value="Monuments" v-model="form.checked" />
      <label>Monuments</label>
      <input id="chk-1" type="checkbox" value="Music" v-model="form.checked" />
      <label>Music</label>
      <input
        id="chk-2"
        type="checkbox"
        value="Museums"
        v-model="form.checked"
      />
      <label>Museums</label>
      <input
        id="chk-3"
        type="checkbox"
        value="Theater"
        v-model="form.checked"
      />
      <label>Theater</label>
      <input id="chk-4" type="checkbox" value="Food" v-model="form.checked" />
      <label>Food</label>
      <input
        id="chk-5"
        type="checkbox"
        value="Adventure"
        v-model="form.checked"
      />
      <label>Adventure</label>
      <input
        id="chk-6"
        type="submit"
        class="button -fill-gradient"
        value="Submit"
      />
    </form>
  </div>
</template>

<script>
import Datepicker from "vue2-datepicker";

export default {
  // ...
  components: {
    Datepicker
  },

  data() {
    console.log(this.$store.state.cities.cities);
    return {
      time: "",
      timePickerOptions: {
        start: "00:00",
        step: "00:30",
        end: "23.30"
      },
      form: this.createNewForm(),
      cities: this.$store.state.cities.cities
    };
  },

  methods: {
    getSelectedItem(data) {
      console.log(data);
    },
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form.city);
      //alert(JSON.stringify(this.form));
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
    },

    createNewForm() {
      return {
        city: "",
        startTime: "",
        endTime: "",
        checked: []
      };
    }
  }
};
</script>
<style scoped>
.main {
  height: 500px;
  width: 500px;
  border: 1 px solid black;
}
</style>
