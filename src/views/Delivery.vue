<template>
  <div class="flex flex-col h-screen p-20">
      <div class="flex items-center justify-center py-16"><p class="text-2xl font-bold text-center text-white sm:text-gray-800" >Request Delivery</p></div>
      <div class="flex justify-between bg-white border rounded-xl" >
          <img class="hidden sm:block" src="@/assets/icons/icons8-camera-64.png">
          <p class="pt-4 font-semibold text-center text-gray-400">Scan </p>
          <div></div>
      </div>
      <div class="flex flex-col items-center justify-center p-16"><p>Quantity:</p><input class="h-10 border rounded-lg" type="number"/></div>
      <div class="flex items-center justify-center p-10">
            <button class="bg-green-400 border rounded-xl">
                <img src="@/assets/icons/icons8-done-64.png"/>
            </button>
      </div>
      
  </div>
</template>
<script>
export default {
  name: "Delivery",
}
</script>