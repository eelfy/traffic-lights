<template>
  <div
    class="lampBody"
    v-bind:style="{ background: color, opacity: 0.3 }"
    v-bind:class="{
      activeClass: currentColorIs === color,
      blink: timerCount < 3,
    }"
  >
    <div class="counter" v-if="currentColorIs === color">{{ timerCount }}</div>
  </div>
</template>

<script>
export default {
  props: ["timerCount", "color", "currentColorIs"],
};
</script>

<style scoped>
.lampBody {
  border-radius: 50%;
  margin: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 190px;
}
.activeClass {
  opacity: 1 !important;
}
.counter {
  font-size: 100px;
  color: rgb(20, 20, 20);
}
.blink {
  animation-name: blink;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes blink {
  50% {
    opacity: 0.3;
  }
}
</style>