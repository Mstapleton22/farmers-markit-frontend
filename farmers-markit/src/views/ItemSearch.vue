<template>
  <div class="container">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search title..">
      <label>Search title:</label>
    </div>
    <div class="button-wrapper">
      <button>I am a food Item</button>
    </div>
    <div class="search-result">
      <Card/>
      <Card/>
      <Card/>
    </div>
    <img src="../assets/squirrel.png">
  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card
  }
};
</script>
<style >
.search-result {
  border: 3px solid coral;
}
</style>
