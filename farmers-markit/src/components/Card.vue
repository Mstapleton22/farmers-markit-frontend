<template>
  <div>
    <div class="card">
      <div class="col1">
        <p>Company Name: {{business.name}}</p>
        <p>Market Name: {{business.market_id}}</p>
        <p>Website: {{business.url}}</p>
      </div>
      <div class="col2">
        <p>stall #: {{business.stall_number}}</p>
        <!-- <button>Menu: {{business.market_id}}</button> -->
        <!-- </p> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["business"]
};
</script>
<style scoped>
.card {
  border: 3px solid rgb(130, 155, 133);
  display: grid;
  background-color: whitesmoke;
  grid-template-columns: repeat(2, 0.45fr);
  font-size: 0.5em;
  padding-left: 10%;
  padding-right: 10%;
  margin: 2% 2%;
  box-shadow: 6px 6px 25px grey;
}
</style>
