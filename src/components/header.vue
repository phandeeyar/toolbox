<template>
	<header class="text-center">
		<rainbow-bar/>
		<div class="jumbotron">
			<h1 class="main_title text-center">Phandeeyar Toolbox</h1>
			<p class="lead">
				Phandeeyar toolbox is a curated list of tools for phandeeyar’s pandas and partners. The site allows users to easily find the right tool for specific tasks.
			</p>
		</div>
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
	.jumbotron {
		background: #67449a;
		border-radius: 0px;
	}
	.jumbotron .main_title, .jumbotron .lead {
		color:#fff;
	}
</style>
