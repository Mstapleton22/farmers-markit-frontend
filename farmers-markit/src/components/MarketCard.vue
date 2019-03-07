<template>
  <div class="card">
    <div class="col1">
      <h4>Name: {{marketCard.name}}</h4>
      <h4>Location: {{marketCard.city}}, {{marketCard.state}}</h4>
    </div>
    <div class="col2">
      <button>
        <i class="fas fa-map-marker-alt"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["marketCard", "Markets"]
};
</script>
<style scoped>
.card {
  border: 3px solid rgb(130, 155, 133);
  display: grid;
  background-color: whitesmoke;
  grid-template-columns: repeat(2, 0.5fr);
  font-size: 1em;
  /* padding-left: 10%; */
  padding-right: 0%;
  margin: 2% 2%;
  box-shadow: 6px 6px 25px grey;
  text-align: center;
}
button {
  padding: 5%;
}

i {
  transform: scale(3);
}
</style>
