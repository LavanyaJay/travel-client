<template>
  <div class="main">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        class="text-variant-black"
        label="City:"
        label-for="input-1"
      >
        <b-form-select id="input-1" v-model="form.city">
          <option :value="null" disabled>-- Please select an option --</option>
          <option v-for="city in options.cities" :key="city.name">
            {{ city.name }}
          </option>
        </b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        class="text-variant-black"
        label="Start Time:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.startTime"
          type="time"
          required
          placeholder="Enter Start Time"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        class="text-variant-black"
        label="End Time:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.endTime"
          type="time"
          required
          placeholder="Enter End Time"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group
          v-model="form.checked"
          class="text-variant-black"
          id="checkboxes-4"
        >
          <b-form-checkbox class="text-variant-black" value="1"
            >Monuments</b-form-checkbox
          >
          <b-form-checkbox class="text-variant-black" value="2"
            >Museums</b-form-checkbox
          >
          <b-form-checkbox value="3">Food</b-form-checkbox>
          <b-form-checkbox value="4">Theater</b-form-checkbox>
          <b-form-checkbox value="5">Adventure</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" class="button">Submit</b-button>
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
    console.log("------> cities", this.cities);
    return {
      form: this.createNewForm(),
      options: this.cities
    };
  },

  methods: {
    getSelectedItem() {
      console.log("-----> inside");
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$store
        .dispatch("fetchAttractions", this.form)
        .then(() => {
          this.$store.dispatch("storeInput", this.form).then(() => {
            this.$store.dispatch("clearRejects", this.form).then(() => {
              this.$router.push({
                name: "itinerary",
                params: { name: this.form.city }
              });
              this.form = this.createNewForm();
            });
          });
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
  padding: 20px;
  margin-left: 100px;
}
.button {
  margin-left: 200px;
  background: rgb(21, 61, 105);
  color: white;
}
</style>
