<template>
  <div
    class=" sm:flex sm:justify-center md:flex md:flex-col lg:flex-row lg:h-screen md:justify-evenly"
  >
    <div class="w-1/3 my-3">
      <div
        id="production"
        class="flex-col p-3 my-3 sm:hidden md:flex md:divide-solid gap-y-6"
      >
        <h3 class="text-base">Production</h3>
        <div
          class="grid md:pl-12 md:gap-24 lg:gap-3 md:grid-cols-5 lg:grid-cols-3"
        >
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-red-400 rounded-2xl">
              <img src="@/assets/icons/barcode-reader.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Data Capture</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <!-- img here -->
            </div>
            <div class="text-sm text-center w-14">Stock Search</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 bg-gray-100 rounded-2xl"></div>
            <div class="text-sm text-center w-14">Part Finder</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/labels.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Label Printing</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/shipped.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Request Delivery</div>
          </div>
        </div>
      </div>
      <div
        id="production-mobile"
        class="inline-block w-full pl-6 text-left sm:relative md:hidden"
      >
        <div>
          <button
            type="button"
            class="inline-flex justify-between py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl w-80 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Production
            <!-- Heroicon name: solid/chevron-down -->
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
        <div
          class="relative right-0 flex justify-center w-56 mt-2 origin-top-righ ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
              >Account settings</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              >Support</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >License</a
            >
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                class="block w-full px-4 py-2 text-sm text-left text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="hr" class="flex flex-col p-3 my gap-y-6">
        <h3 class="text-base">HR</h3>
        <div class="grid grid-cols-3 gap-3">
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/clock.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">My Hours</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/calendar.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Book Leave</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/resume.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">My Details</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/3 my-3">
      <div id="goods-management" class="flex flex-col p-3 my-3 gap-y-6">
        <h3 class="text-base">Goods Management</h3>
        <div class="grid grid-cols-3 gap-3">
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl"></div>
            <div class="text-sm text-center w-14">Goods In</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-blue-500 rounded-2xl"></div>
            <div class="text-sm text-center w-14">Kitting</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/correct.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Issue Goods</div>
          </div>
        </div>
      </div>
      <div id="stock-management" class="flex flex-col p-3 my-3 gap-y-6">
        <h3 class="text-base">Stock Management</h3>
        <div class="grid grid-cols-3 gap-3">
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/checklist.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Stock Take</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/forklift.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Stock Move</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/approved.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Stock Check</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.tab {
  overflow: hidden;
}
.tab-content {
  max-height: 0;
  transition: all 0.5s;
}
input:checked + .tab-label .test {
  background-color: #000;
}
input:checked + .tab-label .test svg {
  transform: rotate(180deg);
  stroke: #fff;
}
input:checked + .tab-label::after {
  transform: rotate(90deg);
}
input:checked ~ .tab-content {
  max-height: 100vh;
}
</style>
<script>
export default {
  name: "Dashboard",
  components: {},
};
</script>
