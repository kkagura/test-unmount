<template>
  <button @click="router.push('/page2')">Go To Page2</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="postcss"></style>
