<template>
  <div class="searchmode">
    <router-link class="link" v-bind:to="{ path: `/itemsearch` }">
      <button>Items</button>
    </router-link>
    <br>
    <router-link class="link" v-bind:to="{ path: `/locationsearch` }">
      <button>Locations</button>
    </router-link>
    <br>
    <router-link class="link" v-bind:to="{ path: `/businesssearch` }">
      <button>Business</button>
    </router-link>
    <br>
    <img src="../assets/bunny.png" alt="bunny">
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.searchmode {
}
button {
  border: none;
}
</style>