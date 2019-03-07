<template>
  <div class="search-wrapper">
    <img src="../assets/bluebird.png">
    <div class="search-result">
      <MarketCard
        v-for="marketCard in Markets"
        v-bind:key="marketCard.id"
        v-bind:marketCard="marketCard"
      />
    </div>
  </div>
</template>
<script>
import MarketCard from "../components/MarketCard.vue";

export default {
  components: {
    MarketCard
  },
  props: ["Markets"]
};
</script>
<style scoped>
.search-wrapper {
  background-color: coral;
}
img {
  width: 300px;
}
</style>