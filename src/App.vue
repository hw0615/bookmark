<template>
  <div id="app">
    <router-view name="header"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import "./styles/reset.css";
</style>
