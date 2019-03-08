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
img {
  width: 300px;
}
button {
  width: 60%;
  padding: 4%;
  margin-bottom: 5px;
  margin-top: 5px;
  background-color: lightgray;
}
.searchmode {
  background-color: #4f6d7a;
}
</style>