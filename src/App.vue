<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import TrafficLighter from "../src/components/TrafficLighter.vue";
export default {
  components: {
    TrafficLighter,
  },
};
</script>

<style>
body {
  background: rgb(20, 20, 20);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
