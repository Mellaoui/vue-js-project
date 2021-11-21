<template>
  <div class="bg-blue-100" id="app">
    <div id="nav" class="fixed top-0 z-10 flex w-screen py-3 bg-gray-300">
      <div id="desktop-navigation" class="justify-around hidden w-full lg:flex">
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

      <div
        id="mobile-navigation"
        class="flex justify-end w-full px-10 lg:hidden"
      >
        <button class="w-10 h-10" @click="dropdown = !dropdown">
          <svg
            class="w-full h-full"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!dropdown"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              v-else
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <div
      id="mobile-dropdrown"
      v-if="dropdown"
      class="fixed z-10 flex justify-center w-full top-14"
    >
      <div class="relative flex justify-center w-full">
        <div
          class="absolute flex flex-col items-center w-10/12 px-3 py-3 bg-gray-800 sm:max-w-md rounded-3xl top-4 gap-y-3"
        >
          <router-link class="py-4 text-sm text-center text-gray-200" to=""
            >Dashboard</router-link
          >
          <hr class="w-11/12 bg-gray-200 rounded-full" />
          <router-link class="py-4 text-sm text-center text-gray-200" to=""
            >Production</router-link
          >
          <hr class="w-11/12 bg-gray-200 rounded-full" />
          <router-link class="py-4 text-sm text-center text-gray-200" to=""
            >Goods Management</router-link
          >
          <hr class="w-11/12 bg-gray-200 rounded-full" />
          <router-link class="py-4 text-sm text-center text-gray-200" to=""
            >Stock Management</router-link
          >
          <hr class="w-11/12 bg-gray-200 rounded-full" />
          <router-link class="py-4 text-sm text-center text-gray-200" to=""
            >Human Resources</router-link
          >
          <hr class="w-11/12 bg-gray-200 rounded-full" />
          <button class="text-gray-200">Logout</button>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      dropdown: false,
    };
  },
};
</script>
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
