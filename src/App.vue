<template>
  <div class="bg-blue-100" id="app">
    <div id="nav" class="flex justify-around py-6 bg-gray-300">
      <router-link class="hidden px-12 text-white sm:hidden lg:block" to="/"
        >Home</router-link
      >
      <div class="px-12 text-white" to="/"></div>
      <router-link
        class="hidden px-12 text-white sm:block lg:hidden"
        to="/about"
        >logout</router-link
      >
      <router-link class="hidden px-12 text-white lg:block" to="/about"
        >About</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
#nav {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 226, 156, 1) 0%,
    rgba(9, 166, 156, 1) 47%,
    rgba(0, 174, 255, 1) 100%
  );
}
</style>
