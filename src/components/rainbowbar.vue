<template>
	<ul class="rainbow-bar">
		<li class="yellow"></li>
		<li class="pink"></li>
		<li class="purple"></li>
		<li class="blue"></li>
		<li class="green"></li>
	</ul>
</template>

<script>
export default {
}
</script>

<style>	
.rainbow-bar {
	list-style:none;
	width:100%;
	margin:0 0 50px 0;
	padding:0px;
	font-size: 0;
}
.rainbow-bar li {
	display: inline-block;
	width:20%;
	height:5px;
	margin:0px;
	padding:0px;
}
.rainbow-bar li.yellow {
	background-color: #f7be17;
}
.rainbow-bar li.pink {
	background-color: #b73794;
}
.rainbow-bar li.purple {
	background-color: #67449a;
}
.rainbow-bar li.blue {
	background-color: #10ace4;
}
.rainbow-bar li.green {
	background-color: #0b7e3f;
}
</style>