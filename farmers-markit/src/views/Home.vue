<template>
  <div class="home">
    <div class="hello">
      <h1>Welcome to Farmers MarkIt</h1>
      <p>This is your front end description</p>
    </div>
    <img alt="Farmers Markit logo" src="../assets/logoName.png">
    <br>
    <router-link class="link" v-bind:to="{ path: `/searchmode` }">
      <button>Im a button</button>
    </router-link>
    <!-- <img alt="Farmers Markit logo" src="public/bee.PNG"> -->
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style>
img {
  width: 300px;
}
</style>
