<template>
  <div class="h-auto p-12 bg-blue-200 sm:h-screen">
    <div class="flex items-center justify-center py-16">
      <p class="text-2xl font-bold text-center text-white sm:text-gray-800">
        Part finder Wizard category
      </p>
    </div>
    <div
      class="grid items-center justify-center grid-cols-2 gap-6 py-16 border sm:bg-white rounded-xl sm:flex sm:flex-row sm:justify-evenly"
    >
      <router-link to="/datacapture">
        <div class="flex flex-col items-center gap-y-2">
          <div
            class="flex items-center justify-center w-24 h-24 bg-green-400 rounded-2xl"
          >
            <img src="@/assets/icons/icons8-screw-eye-64.png" alt="" />
          </div>
          <div class="text-lg font-semibold text-center w-30">Fixings</div>
          <div class="text-sm text-center text-gray-400 w-14">Data Capture</div>
        </div>
      </router-link>

      <router-link to="/partfinder">
        <div class="flex flex-col items-center gap-y-2">
          <div
            class="flex items-center justify-center w-24 h-24 bg-green-400 rounded-2xl"
          >
            <img src="@/assets/icons/icons8-view-64.png" />
          </div>
          <div class="text-lg font-semibold w-30">Sheet</div>
          <div class="text-sm text-center text-gray-400 w-14">Stock Search</div>
        </div>
      </router-link>
      <router-link to="/datacapture">
        <div class="flex flex-col items-center gap-y-2">
          <div
            class="flex items-center justify-center w-24 h-24 bg-green-400 rounded-2xl"
          >
            <img src="@/assets/icons/barcode-reader.png" alt="" />
          </div>
          <div class="text-lg font-semibold text-center w-30">Fasteners</div>
          <div class="text-sm text-center text-gray-400 w-14">Data Capture</div>
        </div>
      </router-link>
      <router-link to="/partfinder">
        <div class="flex flex-col items-center gap-y-2">
          <div
            class="flex items-center justify-center w-24 h-24 bg-green-400 rounded-2xl"
          >
            <img src="@/assets/icons/icons8-view-64.png" />
          </div>
          <div class="text-lg font-semibold w-30">Section</div>
          <div class="text-sm text-center text-gray-400 w-14">Stock Search</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partfinder",
};
</script>
