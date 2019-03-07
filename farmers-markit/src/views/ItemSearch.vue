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
      <IngredientCardContainer
        v-for="ingredient in StoresByIngredient"
        v-bind:key="ingredient.item_id"
        v-bind:ingredient="ingredient"
      />
    </div>
    <img src="../assets/squirrel.png">
  </div>
</template>
<script>
import IngredientCardContainer from "../components/IngredientCardContainer.vue";

export default {
  props: ["StoresByIngredient", "Ingredients"],
  components: {
    IngredientCardContainer
  }
};
</script>
<style >
.container {
  background-color: #228b22;
}
.search-result {
  border: 3px solid coral;
}
button {
  width: 30%;
  padding: 2%;
  margin: 5px;
  background-color: lightgray;
}
img {
  width: 100px;
}
</style>
