<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view
      :getIngredients="getIngredients"
      :getMarkets="getMarkets"
      :getSellers="getSellers"
    />
  </div>
</template>
<script>
let url = "";
export default {
  data() {
    return {
      getIngredients: null,
      getMarkets: null,
      getSellers: null
    };
  },

  methods: {
    getIngedients() {
      fetch(`${url}/`)
        .then(resp => resp.json())
        .then(resp => (this.getIngredients = resp));
    },
    getMarkets() {
      fetch(`${url}/`)
        .then(resp => resp.json())
        .then(resp => (this.getMarkets = resp));
    },
    getSellers() {
      fetch(`${url}/`)
        .then(resp => resp.json())
        .then(resp => (this.getSellers = resp));
    }
  },
  mounted() {
    this.getItems(), this.getMarkets(), this.getSellers();
  }
};
</script>


<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
