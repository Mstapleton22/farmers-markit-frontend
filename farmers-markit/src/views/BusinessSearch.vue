<template>
  <div class="container">
    <img src="../assets/bee.png">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search title..">
      <label>Search title:</label>
    </div>
    <div class="search-result">
      <div class="line"></div>
      <h1>cards populate</h1>
      <div class="line1"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  width: 940px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* .line {
  width: 500px;
  margin-left: 20px;
  border-top: 5px solid blue;
}
.line1 {
  width: 550px;
  border-bottom: 10px solid red;
} */
</style>