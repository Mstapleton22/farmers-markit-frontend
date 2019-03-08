<template>
  <div class="container">
    <div class="search-wrapper">
      <img src="../assets/squirrel.png">
      <input
        type="text"
        v-on:input="$emit('findIngredient', $event.target.value)"
        v-model="search"
        placeholder="Search title.."
      >
    </div>
    <div class="button-wrapper">
      <button
        v-for="item in Ingredients"
        v-bind:key="item.item_id"
        v-bind:value="item.name"
        v-on:click="$emit('buttonIngredient', $event.target.value)"
      >{{item.name}}</button>
      <div class="search-result">
        <IngredientCardContainer
          v-for="ingredient in StoresByIngredient"
          v-bind:key="ingredient.item_id"
          v-bind:ingredient="ingredient"
        />
      </div>
    </div>
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
  background-color: #e38864;
  position: absolute;
  height: 90vh;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
}
.search-result {
  /* border: 3px solid coral; */
}
.search-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  height: 20vh;
}
input {
  margin-top: 100px;
  padding-right: 40px;
  height: 3vh;
  border: 10px solid #dd6e42;
}
input:hover {
  margin-top: 100px;
  padding-right: 40px;
  height: 3vh;
  border: 10px solid white;
}
.button-wrapper {
  width: 98%;
  height: 30vh;
  margin-bottom: 300px;
}
button {
  width: 20%;
  padding: 2%;
  margin: 1px;
  background-color: lightgray;
  text-align: center;
  padding: 2%;
}
img {
  width: 100px;
}
</style>
