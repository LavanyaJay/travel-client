<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" class="ityForm">
      <b-form-group id="input-group-1" label="City:" label-for="input-1">
        <b-form-select
          id="input-1"
          v-model="form.city"
          :options="cities"
          required
        ></b-form-select>
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
          <b-form-checkbox value="2">Museums</b-form-checkbox>
          <b-form-checkbox value="2">Theater</b-form-checkbox>
          <b-form-checkbox value="2">Food</b-form-checkbox>
          <b-form-checkbox value="2">Adventure</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" class="-fill-gradient">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        startTime: "",
        endTime: "",
        city: null,
        checked: []
      },
      cities: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ]
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
    }
  }
};
</script>
<style scoped>
.ityForm {
  background-color: green;
}
</style>
