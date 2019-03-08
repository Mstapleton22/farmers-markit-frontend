<template>
  <div>
    <h1 class="ingredient-header">{{ingredient.name}}</h1>
    <div class="card">
      <Card
        v-for="business in ingredient.stores"
        v-bind:key="business.id"
        v-bind:business="business"
      />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card
  },
  props: ["ingredient"]
};
</script>
<style scoped>
.card {
  /* width: 100%; */
}
</style>
