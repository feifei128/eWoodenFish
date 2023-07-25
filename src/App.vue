<template>
  <Transition name="router_switch">
    <router-view></router-view>
  </Transition>
</template>

<script setup lang="ts">
const rootHeight = 940;

let html = document.getElementsByTagName("html");
html[0].style.fontSize = `${
  (Math.max(document.body.clientWidth, 768) / rootHeight) * 62.5
}%`;
window.onresize = () => {
  html[0].style.fontSize = `${
    (Math.max(document.body.clientWidth, 768) / rootHeight) * 62.5
  }%`;
};
</script>

<style lang="scss" scoped>
.router_switch-enter-active {
  transition: all 0.3s ease-in-out;
}
.router_switch-leave-active {
  transition: all 0.4s;
}

.router_switch-enter-from {
  transform: scale(2);
  opacity: 0;
}
.router_switch-leave-to {
  // transform: translateX(100%);
  transform: scale(0.9);
  opacity: 0;
}
</style>