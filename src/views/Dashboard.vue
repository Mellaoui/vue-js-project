<template>
  <div
    class="justify-center pt-20 md:flex md:flex-col lg:flex-row lg:h-screen md:justify-evenly"
  >
    <div class="flex flex-col items-center w-full my-3 lg:w-1/3">
      <div
        id="production"
        class="flex-col hidden w-full p-3 my-3 sm:flex md:divide-solid gap-y-6"
      >
        <h3 class="text-base">Production</h3>
        <div
          class="grid md:pl-12 lg:pl-2 md:gap-24 lg:gap-3 md:grid-cols-5 lg:grid-cols-3"
        >
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-red-400 rounded-2xl"
            >
              <img src="@/assets/icons/barcode-reader.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Data Capture</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/icons8-view-64.png"/>
            </div>
            <div class="text-sm text-center w-14">Stock Search</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/icons8-sorting-64.png" alt="">
            </div>
            <div class="text-sm text-center w-14">Part Finder</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/labels.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Label Printing</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/shipped.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Request Delivery</div>
          </div>
        </div>
      </div>

      <div
        id="production-mobile"
        class="inline-block w-full text-left sm:relative md:hidden"
      >
        <div class="flex justify-center w-full">
          <button
            type="button"
            @click="production_menu = !production_menu"
            class="inline-flex justify-between px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl w-80 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
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
          class="relative right-0 grid justify-center grid-cols-2 my-4 origin-top-righ ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
          v-show="production_menu"
        >
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-red-400 rounded-2xl">
              <img src="@/assets/icons/barcode-reader.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Data Capture</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 p-3 bg-gray-100 rounded-2xl">
             <img src="@/assets/icons/icons8-view-64.png" />
            </div>
            <div class="text-sm text-center w-14">Stock Search</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div class="w-20 h-20 bg-gray-100 rounded-2xl">
              <img src="@/assets/icons/icons8-sorting-64.png" alt="" />
            </div>
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

      <div class="hidden h-1 bg-gray-300 rounded-full md:flex lg:hidden"></div>

      <div id="hr" class="hidden w-full p-3 sm:flex sm:flex-col my gap-y-6">
        <h3 class="text-base">HR</h3>
        <div class="grid grid-cols-3 gap-3">
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/clock.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">My Hours</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/calendar.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Book Leave</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/resume.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">My Details</div>
          </div>
        </div>
      </div>

      <div
        id="hr-mobile"
        class="inline-block w-full text-left sm:relative md:hidden"
      >
        <div class="flex justify-center w-full my-2">
          <button
            @click="hr_menu = !hr_menu"
            type="button"
            class="inline-flex justify-between px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl w-80 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            HR
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
          v-show="hr_menu"
          class="relative right-0 flex justify-center mt-2 origin-top-righ ring-1 ring-black ring-opacity-5 focus:outline-none"
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
    </div>

    <div class="flex flex-col items-center w-full my-3 lg:w-1/3">
      <div
        id="goods-management"
        class="flex-col hidden w-full p-3 my-3 sm:flex gap-y-6"
      >
        <h3 class="text-base">Goods Management</h3>
        <div class="grid grid-cols-3 gap-3">
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            ></div>
            <div class="text-sm text-center w-14">Goods In</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-2xl"
            ></div>
            <div class="text-sm text-center w-14">Kitting</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/correct.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Issue Goods</div>
          </div>
        </div>
      </div>

      <div
        id="goods-management-mobile"
        class="inline-block w-full text-left sm:relative md:hidden"
      >
        <div class="flex justify-center w-full">
          <button
            @click="goods_menu = !goods_menu"
            type="button"
            class="inline-flex justify-between px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl w-80 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Goods Managment
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
          v-show="goods_menu"
          class="relative right-0 flex justify-center mt-2 origin-top-righ ring-1 ring-black ring-opacity-5 focus:outline-none"
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

      <div class="hidden h-1 bg-gray-300 rounded-full md:flex lg:hidden"></div>

      <div
        id="stock-management"
        class="flex-col hidden w-full p-3 my-3 sm:flex gap-y-6"
      >
        <h3 class="text-base">Stock Management</h3>
        <div class="grid grid-cols-3 gap-3">
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/checklist.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Stock Take</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/forklift.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Stock Move</div>
          </div>
          <div class="flex flex-col items-center gap-y-2">
            <div
              class="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl"
            >
              <img src="@/assets/icons/approved.png" alt="" />
            </div>
            <div class="text-sm text-center w-14">Stock Check</div>
          </div>
        </div>
      </div>

      <div
        id="stock-management-mobile"
        class="inline-block w-full text-left sm:relative md:hidden"
      >
        <div class="flex justify-center w-full my-2">
          <button
            @click="stock_menu = !stock_menu"
            type="button"
            class="inline-flex justify-between px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl w-80 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Stock Management
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
          v-show="stock_menu"
          class="relative right-0 flex justify-center mt-2 origin-top-righ ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="grid grid-rows-2 py-1" role="none">
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
  data: function () {
    return {
      production_menu: false,
      hr_menu: false,
      goods_menu: false,
      stock_menu: false,
    };
  },
};
</script>
