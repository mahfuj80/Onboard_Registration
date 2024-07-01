<script setup>
const items = [
  { id: 1, name: "Name", image: "" },
  { id: 1, name: "Name", image: "" },
  { id: 1, name: "Name", image: "" },
  { id: 1, name: "Name", image: "" },
  { id: 1, name: "Name", image: "" },
  { id: 1, name: "Name", image: "" },
];
</script>

<template>
  <section
    class="container mx-auto py-12 mt-20 bg-gray-100 rounded-lg px-2 md:px-8"
  >
    <!-- Heading -->
    <div
      class="flex justify-between md:items-center flex-col gap-4 md:flex-row"
    >
      <!-- left -->
      <div class="font-semibold text-xl">
        What Type of Website are you looking for?
      </div>
      <!-- right -->
      <div
        class="flex md:justify-center gap-4 items-center bg-gray-200 rounded-lg p-2 cursor-pointer"
      >
        Browse All Templates
        <UIcon name="i-material-symbols:arrow-right-alt-rounded" dynamic />
      </div>
    </div>

    <div class="mt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <div
          v-for="item in items"
          :key="item.id"
          class="bg-white shadow-sm rounded-lg overflow-hidden"
        >
          <div class="flex justify-center items-center w-full">
            <div
              class="font-semibold w-[50%] text-center flex items-center justify-center pl-4"
            >
              Company retreats
            </div>

            <div class="relative overflow-hidden w-[50%] h-44">
              <img
                class="absolute h-56 w-full left-10"
                src="/card-image/webpage1.png"
                alt="Image"
              />
              <img
                class="absolute h-56 w-full left-36"
                src="/card-image/webpage2.jpg"
                alt="Image"
              />
              <img
                class="absolute h-56 w-full left-56 hover:left-64"
                src="/card-image/webpage3.webp"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
