<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view
      :Ingredients="Ingredients"
      :Markets="Markets"
      :Sellers="Sellers"
      :StoresByIngredient="StoresByIngredient"
      :StoresByMarket="StoresByMarket"
      :StoresByName="StoresByName"
      v-on:findIngredient="getIngredientByChar($event)"
      v-on:buttonIngredient="getIngredientByChar($event)"
    />
  </div>
</template>
<script>
let url = "https://boiling-fortress-95925.herokuapp.com";
export default {
  data() {
    return {
      Ingredients: null,
      Markets: null,
      Sellers: null,
      StoresByIngredient: null,
      StoresByMarket: null,
      StoresByName: null
    };
  },
  methods: {
    getIngredients() {
      fetch(`${url}/ingredients`)
        .then(resp => resp.json())
        .then(resp => (this.Ingredients = resp));
    },
    getIngredientByChar(input) {
      fetch(`${url}/ingredients/${input}`)
        .then(resp => resp.json())
        .then(resp => {
          return (this.StoresByIngredient = resp[0].stores);
        });
    },
    getMarkets() {
      fetch(`${url}/markets`)
        .then(resp => resp.json())
        .then(resp => (this.Markets = resp));
    },
    getSellers() {
      fetch(`${url}/sellers`)
        .then(resp => resp.json())
        .then(resp => (this.Sellers = resp));
    },
    log(input) {
      console.log(input);
    }
  },
  mounted() {
    this.getIngredients(), this.getMarkets(), this.getSellers();
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
