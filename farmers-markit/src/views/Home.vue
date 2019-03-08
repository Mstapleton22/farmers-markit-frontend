<template>
  <div class="app">
    <div class="home">
      <div class="hello">
        <h1>Welcome to</h1>

        <img alt="Farmers Markit logo" src="../assets/logoName.png">
        <br>
        <router-link class="link" v-bind:to="{ path: `/searchmode` }">
          <button>Im a button</button>
        </router-link>
      </div>
      <!-- <img alt="Farmers Markit logo" src="public/bee.PNG"> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style scoped>
h1 {
  /* margin-top: 5%; */
  display: block;
  font-size: 2em;
  font-weight: bold;
}
img {
  width: 300px;
  /* padding: -10%; */
}
button {
  width: 30%;
  /* padding: 4%; */
  margin-bottom: 10px;
}
.home {
  height: 100%;
  width: 100vw;
  position: absolute;
  left: 10;
  top: 50;
  background-color: #f1d6b8;
  /* margin-block-start: -0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */
}
</style>


