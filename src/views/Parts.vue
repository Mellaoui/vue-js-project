<template>
  <div class="h-screen p-12 bg-blue-200">
    <div class="flex items-center justify-center py-16">
      <p class="text-2xl font-bold">Part Search</p>
    </div>
    <div
      class="flex flex-col items-center justify-center border sm:bg-white rounded-xl sm:flex-row sm:justify-evenly"
    >
      <div>
        <router-link to="/datacapture">
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-red-400 rounded-2xl"
            >
              <img src="@/assets/icons/barcode-reader.png" alt="" />
            </div>
            <div class="text-sm text-center w-30">Data Capture</div>
            <div class="text-sm text-center text-gray-400 w-14">
              Data Capture
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <router-link to="/partfinder">
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/icons8-view-64.png" />
            </div>
            <div class="text-sm w-30">Part Finder</div>
            <div class="text-sm text-center text-gray-400 w-14">
              Stock Search
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parts",
};
</script>
