<template>
  <div class="main">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="City:" label-for="input-1">
        <b-form-select id="input-1" v-model="form.city">
          <!-- <template v-slot:first>
            <option :value="null" disabled>-- Please select an option --</option>
          </template>-->
          <option v-for="city in options" :key="city.name">
            {{ city.name }}
          </option>
        </b-form-select>
      </b-form-group>
      <b-form-group id="input-group-2" label="Start Time:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.startTime"
          type="time"
          required
          placeholder="Enter Start Time"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="End Time:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.endTime"
          type="time"
          required
          placeholder="Enter End Time"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="1">Monuments</b-form-checkbox>
          <b-form-checkbox value="2">Museums</b-form-checkbox>
          <b-form-checkbox value="3">Theater</b-form-checkbox>
          <b-form-checkbox value="4">Food</b-form-checkbox>
          <b-form-checkbox value="5">Adventure</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" class="-fill-gradient">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import {
  BFormGroup,
  BButton,
  BForm,
  BFormInput,
  BFormSelect,
  BFormCheckbox,
  BFormCheckboxGroup
} from "bootstrap-vue";
export default {
  components: {
    "b-form-group": BFormGroup,
    "b-button": BButton,
    "b-form-input": BFormInput,
    "b-form-select": BFormSelect,
    "b-form-checkbox": BFormCheckbox,
    "b-form": BForm,
    "b-form-checkbox-group": BFormCheckboxGroup
  },
  props: {
    cities: {
      type: Object
    }
  },

  data() {
    console.log(this.cities);
    return {
      form: { city: "", startTime: "", endTime: "", checked: [] },
      options: this.$store.state.cities.cities
    };
  },

  methods: {
    getSelectedItem(data) {
      console.log(data);
    },
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form.city);
      alert(JSON.stringify(this.form));
      this.$store
        .dispatch("fetchAttractions", this.form)
        .then(() => {
          //alert("Ity created successfully");
          this.$store.dispatch("storeInput", this.form).then(() => {
            this.$router.push({
              name: "itinerary",
              params: { name: this.form.city }
            });
            this.form = this.createNewForm();
          });
        })
        .catch({});
    },

    createNewForm() {
      return {
        city: "Rome",
        startTime: "10:00:00",
        endTime: "16:00:00",
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
