<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <template v-if="Component">
        <transition name="zoom-narrow" :duration="300" mode="out-in" appear>
          <keep-alive :include="['Page1', 'Page2']">
            <suspense>
              <component :is="Component" :key="route.path"></component>
            </suspense>
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </div>
</template>
<style>
.zoom-narrow-enter-active,
.zoom-narrow-leave-active {
  transition: transform 0.35s, opacity 0.28s ease-in-out;
}
.zoom-narrow-enter-from {
  opacity: 0;
  transform: scale(0.97);
}
.zoom-narrow-leave-to {
  opacity: 0;
  transform: scale(1.03);
}
</style>
