<template>
  <div>
    <div
      class="md:flex block relative justify-center items-center top-8 py-2 lg:gap-8 gap-2"
    >
      <AdsCardL />
      <AdsCardR />
    </div>
    <HeadLine :title="'Popular Cars'" />
    <div
      class="flex custom:flex-wrap flex-nowrap custom:overflow-x-hidden overflow-x-auto custom:justify-center justify-start mx-8 custom:gap-8 gap-4 mt-4 py-6"
    >
      <div v-for="(car, index) in carsStore.getPopularCars" :key="index">
        <PopularCarsCard :carData="car" />
      </div>
    </div>
    <HeadLine :showLink="false" :title="'Car Recommendations'" />
    <div
      class="flex flex-wrap justify-center mx-8 custom:gap-8 gap-4 mt-4 py-6"
    >
      <div v-for="(car, index) in carsStore.getCars" :key="index">
        <CardsCard :carData="car" />
      </div>
    </div>
    <div class="flex justify-center items-center mt-8 mb-4">
      <button
        type="button"
        class="bg-[#3563E9] text-white px-4 py-2 rounded-lg mt-6 text-base font-medium hover:bg-[#3B8BFF] ml-6"
        @click="() => {}"
      >
        show more
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import AdsCardL from "@/components/AdsCardL.vue";
import AdsCardR from "@/components/AdsCardR.vue";
import CardsCard from "@/components/CarsCard.vue";
import PopularCarsCard from "@/components/PopularCarsCard.vue";
import HeadLine from "@/components/HeadLine.vue";
import { defineComponent } from "vue";
import { useCarsStore } from '@/store/cars.store';

definePageMeta({
  layout: "default",
});

export default defineComponent({
  components: {
    AdsCardL,
    AdsCardR,
    CardsCard,
    PopularCarsCard,
    HeadLine,
  },
  data() {
    const carsStore = useCarsStore();

    onMounted(() => {
      carsStore.fetchPopularCars();
      carsStore.fetchCars();
    });

    return {
      carsStore,
    };
  },
});
</script>
