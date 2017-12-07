<template>
	<header class="text-center">
		<rainbow-bar/>
		<img src="../assets/images/pdy-logo.png" width="200px" alt="Phandeeyar" class="pdy-logo">
		<h1>Toolbox</h1>
	</header>
</template>

<script>
import rainbowbar from './rainbowbar'
export default {
  components: {
    'rainbow-bar': rainbowbar
  }
}
</script>

<style>
	.pdy-logo {
		margin-bottom: 50px;
	}
</style>
