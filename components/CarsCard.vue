<template>
  <div class="custom_656:w-72e w-[100%]rounded-lg px-4 py-4 bg-white">
    <div class="flex justify-between items-center">
      <div>
        <p>
          {{ carData.name }}
          <span>{{ carData.type }}</span>
        </p>
      </div>
      <div>
        <img src="~/assets/svg/like-heart.svg" alt="Not liked" width="18" />
      </div>
    </div>

    <div class="custom_656:block flex">
      <div class="mx-auto my-10">
        <figure class="image is-4by3">
          <img
            :src="carData.img"
            :alt="carData.name"
            class="h-24 w-full object-cover"
          />
        </figure>
      </div>
      <div class="custom_656:flex block justify-between items-center my-4">
        <div class="flex justify-normal items-center gap-2 custom_656:my-0 my-4">
          <img
            src="~/assets/svg/gas-station-icon.svg"
            alt="Gasoline"
            width="18"
          />
          <span>{{ carData.gasolineLiter }} L</span>
        </div>
        <div class="flex justify-normal items-center gap-2 custom_656:mb-0 mb-4">
          <img
            src="~/assets/svg/car-type-icon.svg"
            alt="Transition"
            width="18"
          />
          <span>{{ carData.type }}</span>
        </div>
        <div class="flex justify-normal items-center gap-2 custom_656:mb-0 mb-4">
          <img src="~/assets/svg/people-icon.svg" alt="People" width="18" />
          <span>{{ carData.people }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-8 mb-4 items-center">
      <div>
        <span class="text-2xl font-bold text-gray-darker"
          >{{ carData.pricePerDay }}$ /</span
        >
        <span class="text-xs ml-2 text-gray-dark">day</span>
      </div>
      <div>
        <button
          @click="rediredtToCarDetails"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Rent Now
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ICarData } from "@/types/types.shared";

export default {
  name: "CarsListedCard",
  props: {
    carData: {
      type: Object as () => ICarData,
      required: true,
    },
  },

  methods: {
    rediredtToCarDetails() {
      this.$router.push(`/details/${this.carData.id}`);
    },
  },
};
</script>
