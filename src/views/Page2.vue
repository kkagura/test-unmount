<template>
  <button @click="unmount">Unmount App</button>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const unmount = () => {
  window.app.unmount();
};

onMounted(() => {
  console.log("page2 mounted");
});
</script>

<style lang="postcss"></style>
