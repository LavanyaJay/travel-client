<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group
      id="input-group-1"
      v-model="form.city"
      label="City:"
      label-for="input-1"
    >
      <b-form-select id="input-1" v-model="form.city">
        <option v-for="city in cities" :key="city.id">{{ city.name }}</option>
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
        <b-form-checkbox value="2">Shopping</b-form-checkbox>
        <b-form-checkbox value="3">Museums</b-form-checkbox>
        <b-form-checkbox value="4">Theater</b-form-checkbox>
        <b-form-checkbox value="5">Food</b-form-checkbox>
        <b-form-checkbox value="6">Adventure</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <b-button type="submit" class="-fill-gradient">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
//import { mapState } from "vuex";
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

  data() {
    console.log(this.$store.state.cities.cities);
    return {
      form: this.createNewForm(),
      cities: this.$store.state.cities.cities
    };
  },
  //computed: mapState({ cities: state => state.cities.cities }),
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form.city);
      alert(JSON.stringify(this.form));
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.startTime = "";
      this.form.endTime = "";
      this.form.city = null;
      this.form.checked = [];
    },

    createNewForm() {
      return {
        startTime: "",
        endTime: "",
        city: "",
        checked: []
      };
    }
  }
};
</script>
