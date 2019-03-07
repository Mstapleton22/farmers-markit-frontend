<template>
  <div class="container">
    <div class="search-wrapper">
      <input
        type="text"
        v-on:input="$emit('findIngredient', $event.target.value)"
        v-model="search"
        placeholder="Search title.."
      >
      <label>Search title:</label>
    </div>
    <div class="button-wrapper">
      <button
        v-for="item in Ingredients"
        v-bind:key="item.item_id"
        v-bind:value="item.name"
        v-on:click="$emit('buttonIngredient', $event.target.value)"
      >{{item.name}}</button>
    </div>
    <div class="search-result">
      <Card
        v-for="business in StoresByIngredient"
        v-bind:key="business.id"
        v-bind:business="business"
      />
    </div>
    <img src="../assets/squirrel.png">
  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  props: ["StoresByIngredient", "Ingredients"],
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
