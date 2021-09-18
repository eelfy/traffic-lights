<template>
  <div to="/red" class="trafficLighterBody">
    <Lamp
      v-for="color of arrOfColors"
      :key="color"
      v-bind:color="color"
      v-bind:currentColorIs="currentColorIs"
      v-bind:timerCount="timerCount"
    />
  </div>
</template>


<script>
import Lamp from "../components/Lamp.vue";
export default {
  props: ["time", "currentColorIs"],
  data() {
    return {
      arrOfColors: ["red", "yellow", "lime"],
      active: true,
      timerCount: this.$store.state.time,
      fromPage: null,
    };
  },
  components: {
    Lamp,
  },
  created(el) {
    if (this.currentColorIs !== localStorage.getItem("url")) {
      this.timerCount = this.time;
    } else {
      this.timerCount = this.$store.state.time;
    }
    window.setInterval(this.autoIncrementTimer, 1000);
  },
  watch: {
    $route(to, from) {
      this.timerCount = this.time;
      this.fromPage = from.name;
    },
  },

  methods: {
    autoIncrementTimer: function () {
      localStorage.setItem("url", this.currentColorIs);
      const routeName = this.$route.name;
      if (this.timerCount <= 0) {
        switch (routeName) {
          case "Red":
            this.$router.push("yellow");
            break;
          case "Yellow":
            this.fromPage == null
              ? this.$router.push("green")
              : this.fromPage === "Red"
              ? this.$router.push("green")
              : this.$router.push("red");
            break;
          case "Green":
            this.$router.push("yellow");
            break;
          default:
            break;
        }
        return;
      }
      this.timerCount -= 1;
      this.$store.state.time = this.timerCount;
      this.$store.commit("changeTime");
      this.$store.commit("isCurrentUrl", "ayoo");
    },
  },
};
</script>

<style scoped>
.trafficLighterBody {
  background: #202020;
  border-radius: 60px;
}
</style>