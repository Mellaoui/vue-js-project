<template>
  <div class="bg-blue-100" id="app">
    <div id="nav" class="fixed top-0 z-10 flex w-screen py-3 bg-gray-300">
      <div id="desktop-navigation" class="justify-around hidden w-full lg:flex">
        <router-link class="hidden px-12 text-white sm:hidden lg:block" to="/"
          >
          <svg width="120" height="20.25" fill="#ffffff" viewBox="394.5 418.584 212 206.25" xml:space="preserve"><path d="m600.116 503.301-88.955-77.062a3.982 3.982 0 0 0-1.059-.639c-5.693-4.32-13.557-4.119-19.049.639l-88.956 77.053c-6.376 5.519-7.181 15.313-1.784 21.839 3.411 4.128 9.069 4.075 13.408 3.2v82.834c0 6.253 5.02 11.344 11.195 11.344h53.586a4.376 4.376 0 0 0 4.374-4.373v-72.242h36.471v72.242a4.375 4.375 0 0 0 4.372 4.373h53.587c6.175 0 11.195-5.091 11.195-11.344v-82.834c4.355.857 9.996.919 13.407-3.2 5.389-6.525 4.584-16.329-1.792-21.83zm-4.95 16.25c-.9 1.058-5.563.48-9.288-1.146a4.366 4.366 0 0 0-4.146.351 4.382 4.382 0 0 0-1.985 3.655v88.746c0 1.435-1.103 2.598-2.449 2.598h-49.214v-72.242a4.374 4.374 0 0 0-4.373-4.373h-45.217a4.374 4.374 0 0 0-4.373 4.373v72.242h-49.214c-1.347 0-2.449-1.163-2.449-2.598V522.41a4.365 4.365 0 0 0-1.985-3.664 4.461 4.461 0 0 0-4.155-.342c-3.306 1.461-8.334 2.283-9.279 1.138-2.388-2.887-2.046-7.207.77-9.647l88.956-77.061a6.374 6.374 0 0 1 8.388 0c.314.28.674.507 1.05.674l88.186 76.405c2.824 2.431 3.164 6.751.777 9.638z"/></svg>
          </router-link
        >
        <router-link class="hidden px-12 text-white sm:hidden lg:block">
          <svg  width="138" height="20"><defs><linearGradient y2="0" x2="0" y1="1" x1="0" id="a"><stop stop-color="#ffffff" offset="0%"/><stop stop-color="#ffffff" offset="100%"/></linearGradient></defs><path transform="matrix(3.8 0 0 3.8 8.2 8.2)" d="M16 30.534c8.027 0 14.534-6.507 14.534-14.534 0-8.027-6.507-14.534-14.534-14.534C7.973 1.466 1.466 7.973 1.466 16c0 8.027 6.507 14.534 14.534 14.534Zm2.335-24.258 3.536 3.538-6.187 6.187 6.187 6.187-3.536 3.537-9.723-9.724 9.723-9.725Z" fill="url(#a)" style="opacity:1;fill-opacity:1"/></svg>
        </router-link>
        <div class="px-12 text-white" to="/"></div>
        <router-link
          class="hidden px-12 text-white sm:block lg:hidden"
          to="/about"
          >logout</router-link
        >
        <router-link class="hidden px-12 text-white lg:block" to="/about"
          >Logout</router-link
        >
      </div>

      <div
        id="mobile-navigation"
        class="flex justify-end w-full px-10 lg:hidden"
      >
        <button class="w-10 h-10" @click="dropdown = !dropdown">
          <svg
            class="w-full h-full"
            fill="white"
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
