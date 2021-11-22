<template>
  <div>
    <div
      class="flex flex-col items-center h-auto pt-24 pb-24 bg-blue-200 sm:h-screen"
    >
      <div
        class="inline-flex w-full h-10 px-4 pt-2 text-sm leading-none text-gray-600 bg-white rounded-full shadow sm:hidden justify-evenly sm:items-center sm:w-2/3 text-teal"
      >
        <div><p class="font-medium">Active</p></div>
        <div><p>Active</p></div>
      </div>
      <div class="flex flex-row w-full sm:justify-evenly">
        <input
          type="text"
          class="inline-flex w-full h-10 px-4 pt-2 mt-12 text-sm leading-none text-pink-600 bg-white rounded-full shadow sm:items-center sm:w-2/3 text-teal"
        />
        <router-link class="hidden sm:block" to="/datacupture">
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-red-400 rounded-2xl"
            >
              <img src="@/assets/icons/barcode-reader.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Data Capture</div>
          </div>
        </router-link>
        <router-link class="hidden sm:block" to="/">
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/icons8-view-64.png" />
            </div>
            <div class="text-sm text-center w-14">Stock Search</div>
          </div>
        </router-link>
      </div>
      <div class="flex flex-col w-full h-full px-5 pt-4 justify-evenly sm:flex-row">
        <div class="w-full">
          <p class="hidden font-bold sm:block">Active Work</p>
          <div class="flex flex-col mr-4 bg-white h-80">
            <p class="pl-2 text-sm font-medium">Route:HFG3241 5181</p>
            <p class="pl-2 text-sm font-medium text-gray-400">
              ASS-097665 Lorem ipsum dolor sit amet consectetur
            </p>
            <p class="pl-2 text-sm font-medium">0768-8689</p>
            <p class="pl-2 text-sm font-medium text-gray-400">1 Active User</p>
            <div class="grid grid-cols-4 pt-4 pl-2">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
            <hr class="pl-3 bg-gray-200 rounded-full" />
          </div>
        </div>

        <div class="hidden w-full h-full sm:block">
          <p class="font-bold">Scheduled Work</p>
          <div class="flex flex-col bg-white h-80">
            <div class="h-full"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row w-full border rounded-t-lg justify-evenly sm:hidden border-sm rounded-t-3xl bg-gray-50"
    >
      <router-link to="/datacupture">
        <div class="flex flex-col items-center gap-y-2">
          <div
            class="flex items-center justify-center w-24 h-24 bg-red-400 rounded-2xl"
          >
            <img src="@/assets/icons/barcode-reader.png" alt="" />
          </div>
          <div class="text-sm text-center w-14">Data Capture</div>
        </div>
      </router-link>
      <router-link to="/">
        <div class="flex flex-col items-center gap-y-2">
          <div
            class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
          >
            <img src="@/assets/icons/icons8-view-64.png" />
          </div>
          <div class="text-sm text-center w-14">Stock Search</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "datacupture",
};
</script>
