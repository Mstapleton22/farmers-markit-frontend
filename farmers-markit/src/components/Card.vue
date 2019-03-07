<template>
  <div class="card">
    <div class="col1">
      <p>Company Name:</p>
      <p>Market Name:</p>
      <p>Website</p>
    </div>
    <div class="col2">
      <p>stall #</p>
      <button>Menu</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.card {
  border: 3px solid rgb(130, 155, 133);
  display: grid;
  grid-template-columns: repeat(2, 0.45fr);
  font-size: 0.5em;
  padding-left: 10%;
  padding-right: 10%;
  margin: 2% 2%;
  box-shadow: 10px 10px 30px grey;
}
</style>
