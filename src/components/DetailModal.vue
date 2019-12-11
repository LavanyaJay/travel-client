<template>
  <b-modal title="Using Component Methods">
    <div class="d-block text-center">
      <h3>Hello From My Modal!</h3>
    </div>
    <b-button class="mt-3" variant="outline-danger" @click="close"
      >Close Me</b-button
    >
  </b-modal>
</template>
<script>
console.log("inside modal");
export default {
  name: "DetailModal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
