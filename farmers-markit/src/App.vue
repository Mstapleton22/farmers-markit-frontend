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
      v-on:findIngredient="getIngredientByChar($event)"
      v-on:buttonIngredient="getIngredientByChar($event)"
      v-on:sellerSearch="getSellers($event)"
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
      StoresByIngredient: null
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
          let stores = [];
          console.log(resp);
          resp.forEach(ingredient => {
            console.log(ingredient);
            stores.push(ingredient);
          });
          return (this.StoresByIngredient = stores);
        });
    },
    getMarkets() {
      fetch(`${url}/markets`)
        .then(resp => resp.json())
        .then(resp => (this.Markets = resp));
    },
    getSellers(input) {
      fetch(`${url}/sellers/${input}`)
        .then(resp => resp.json())
        .then(resp => (this.Sellers = resp));
    },
    log(input) {
      console.log(input);
    }
  },
  mounted() {
    this.getIngredients(), this.getMarkets();
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 90vh;
  position: absolute;
  left: -5;
  top: -10;
  width: 100%;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
#nav {
  padding: 30px;
  background-color: inherit;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
