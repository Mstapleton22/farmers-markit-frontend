<template>
  <div class="container">
    <img src="../assets/bee.png">
    <br>
    <div class="search-wrapper">
      <input
        type="text"
        v-model="search"
        v-on:input="$emit('sellerSearch', $event.target.value)"
        placeholder="Search title.."
      >
      <label>Search title:</label>
    </div>
    <div class="search-result">
      <div class="line"></div>
      <Card v-for="seller in Sellers" v-bind:key="seller.id" v-bind:business="seller"/>
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card
  },
  props: ["Sellers"]
};
</script>
<style scoped>
.container {
  margin: auto;
  background-color: rgba(142, 69, 133, 0.7);
  /* color: white; */
}
img {
  display: none;
  width: 300px;
}
/* .line {
  width: 500px;
  margin-left: 20px;
  border-top: 5px solid blue;
}
.line1 {
  width: 550px;
  border-bottom: 10px solid red;
} */
</style>