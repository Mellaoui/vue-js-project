<template>
    <div class="flex flex-row justify-evenly">
        <div class="w-1/3 my-3 bg-red-100">
            <div id="production" class="flex flex-col p-3 my-3 bg-green-200 gap-y-6">
                <h3 class="text-base">Production</h3>
                <div class="grid grid-cols-3 gap-3">
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                          <img src="@/assets/icons/barcode-reader.png" alt=""/>
                        </div>
                        <div class="text-sm text-center w-14">Data Capture</div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                            <!-- img here -->
                        </div>
                        <div class="text-sm text-center w-14">Stock Search</div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 bg-yellow-400 rounded-2xl"></div>
                        <div class="text-sm text-center w-14">Part Finder</div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                          <img src="@/assets/icons/labels.png" alt=""/>
                        </div>
                        <div class="text-sm text-center w-14">
                            Label Printing
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                            <img src="@/assets/icons/shipped.png" alt="">
                        </div>
                        <div class="text-sm text-center w-14">
                            Request Delivery
                        </div>
                    </div>
                </div>
            </div>
            <div id="hr" class="flex flex-col p-3 my-3 bg-blue-200 gap-y-6">
                <h3 class="text-base">HR</h3>
                <div class="grid grid-cols-3 gap-3">
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                            <img src="@/assets/icons/clock.png" alt="" />
                        </div>
                        <div class="text-sm text-center w-14">My Hours</div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                            <img src="@/assets/icons/calendar.png" alt="">
                        </div>
                        <div class="text-sm text-center w-14">Book Leave</div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                            <img src="@/assets/icons/resume.png" alt="">
                        </div>
                        <div class="text-sm text-center w-14">My Details</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-1/3 my-3 bg-pink-100">
            <div id="goods-management" class="flex flex-col p-3 my-3 bg-purple-200 gap-y-6">
                <h3 class="text-base">Goods Management</h3>
                <div class="grid grid-cols-3 gap-3">
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl"></div>
                        <div class="text-sm text-center w-14">Goods In</div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl"></div>
                        <div class="text-sm text-center w-14">Kitting</div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                            <img src="@/assets/icons/correct.png" alt="">
                        </div>
                        <div class="text-sm text-center w-14">Issue Goods</div>
                    </div>
                </div>
            </div>
            <div id="stock-management" class="flex flex-col p-3 my-3 bg-indigo-200 gap-y-6">
                <h3 class="text-base">Stock Management</h3>
                <div class="grid grid-cols-3 gap-3">
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                            <img src="@/assets/icons/checklist.png" alt="">
                        </div>
                        <div class="text-sm text-center w-14">Stock Take</div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                            <img src="@/assets/icons/forklift.png" alt="">
                        </div>
                        <div class="text-sm text-center w-14">Stock Move</div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2">
                        <div class="w-20 h-20 p-3 bg-yellow-400 rounded-2xl">
                            <img src="@/assets/icons/approved.png" alt="">
                        </div>
                        <div class="text-sm text-center w-14">Stock Check</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    components: {},
};
</script>
