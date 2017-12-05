<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header'
export default {
  name: 'app',
  components: {
    'app-header': header
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  @import "./assets/scss/custom-style.scss";
</style>
