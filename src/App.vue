<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
#app {
	margin-top: 50px;
}

.search-wrapper {
	margin: 20px;
}

.badge {
	border-radius: 0;
}
</style>

