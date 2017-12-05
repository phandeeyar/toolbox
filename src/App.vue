<template>
  <div id="app">
    <div class="container text-center">
      <h1>Phandeeyar Toolbox</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  @import "./assets/scss/custom-style.scss";
</style>
