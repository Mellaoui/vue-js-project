<template>
  <div class="bg-blue-100" id="app">
    <div id="nav" class="flex justify-around py-6 bg-gray-300">
      <router-link class="px-12" to="/">Home</router-link>
      <router-link class="px-12" to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
</style>
