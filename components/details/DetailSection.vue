<template>
  <!-- Loeader -->
  <div
    v-if="!Object.keys(carsStore.getCar).length"
    role="status"
    class="flex justify-center items-center mt-8 mb-4 h-screen"
  >
    <svg
      aria-hidden="true"
      class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
  <!-- End Loader -->
  <div v-else class="eight_hundred:flex block justify-between gap-4 mx-4">
    <div class="eight_hundred:w-[40%] w-[100%]">
      <div class="ads-card-right">
        <div></div>
        <p
          class="text-white xl:text-4xl md:text-3xl xs:text-3xl text-2xl pl-6 pr-2 mt-10 md:w-72 w-90"
        >
          Sports car with the best design and acceleration
          <span
            class="block md:mt-6 mt-2 md:text-sm xs:text-base text-sm pr-4 font-light md:w-72 w-60"
          >
            Safety and comfort while driving a futuristic and elegant sports car
          </span>
        </p>
        <img
          :src="carsStore.getCar?.img"
          alt="Ads"
          class="absolute lg:top-[58%] top-[58%] max-h-[34%] lg:h-[64%] h-[50%] space-x-reverse xl:right-[4%] lg:right-[12%] md:right-[8%] sm:right-[16%] right-[2%]"
        />
      </div>
      <div class="flex justify-between mt-6">
        <div class="container" tabindex="1">
          <img :src="carsStore.getCar?.img" alt="Ads" height="400px" width="400px" />
        </div>
        <div class="container" tabindex="1">
          <img
            :src="carsStore.getCar?.images[0].url"
            alt="Ads"
            height="400px" width="400px"
          />
        </div>
        <div class="container" tabindex="1">
          <img
            :src="carsStore.getCar?.images[1].url"
            alt="Ads"
            height="400px" width="400px"
          />
        </div>
      </div>
    </div>
    <div
      class="relative bg-white eight_hundred:w-[60%] w-[100%] p-6 eight_hundred:h-none sm:h-[450px] xs:h-[500px] h-[650px]"
    >
      <div class="flex gap-8">
        <div>
          <p class="lg:text-3xl text-2xl font-bold text-gray-darker">
            {{ carsStore.getCar?.name }}
          </p>
          <div class="flex gap-4 mt-2">
            <div class="flex gap-x-1">
              <img
                src="~/assets/svg/5-star-yellow.svg"
                alt="5 star"
                class="w-5"
              />
              <img
                src="~/assets/svg/5-star-yellow.svg"
                alt="5 star"
                class="w-5"
              />
              <img
                src="~/assets/svg/5-star-yellow.svg"
                alt="5 star"
                class="w-5"
              />
              <img
                src="~/assets/svg/5-star-yellow.svg"
                alt="5 star"
                class="w-5"
              />
              <img
                src="~/assets/svg/5-star-outline.svg"
                alt="5 star"
                class="w-5"
              />
            </div>
            <p class="text-gray-light font-light text-sm">400+ reviews</p>
          </div>
        </div>
        <div class="pt-1">
          <img src="~/assets/svg/like-heart.svg" alt="5 star" class="w-5" />
        </div>
      </div>
      <div class="flex gap-4 mt-4 mb-10">
        <p class="lg:text-lg text-md font-extralight text-gray-dark mt-4">
          {{ carsStore.getCar?.description }}
        </p>
      </div>
      <div
        class="flex flex-wrap lg:gap-x-20 sm:gap-x-10 gap-x-4 gap-y-4 mt-4 sm:justify-normal justify-between"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="flex justify-between xl:w-[20%] lg:w-[40%] eight_hundred:w-[30%] xs:w-[40%] w-[100%]"
        >
          <p class="text-gray-light font-thin">{{ item.name }}</p>
          <p class="text-gray-dark">{{ item.value }}</p>
        </div>
      </div>
      <div class="flex mt-4">
        <p
          class="absolute lg:text-3xl xs:text-xl text:lg font-medium text-gray-darker mt-2 xs:left-8 left-5 bottom-8"
        >
          $810.00 /
          <span class="text-gray-light font-light ml-2 lg:text-sm text-xs">
            day</span
          >
        </p>
        <button
          type="button"
          class="absolute bg-[#3563E9] text-white lg:px-8 px-4 lg:py-4 py-2 rounded-sm text-base font-medium hover:bg-[#3B8BFF] xs:right-8 right-5 bottom-6"
          @click="() => {}"
        >
          Rent Now
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCarsStore } from "@/store/cars.store";

export default defineComponent({
  setup() {
    const carsStore = useCarsStore();

    const items = ref([
      {
        id: 1,
        name: "Type",
        value: "",
      },
      {
        id: 2,
        name: "People",
        value: "",
      },
      {
        id: 3,
        name: "Gasoline",
        value: "",
      },
      {
        id: 4,
        name: "Steering",
        value: "",
      },
    ]);

    watch(
      () => carsStore.getCar,
      (newVal) => {
        items.value[0].value = newVal.type;
        items.value[1].value = newVal.people;
        items.value[2].value = newVal.gasolineLiter;
        items.value[3].value = newVal.kindOfTransition;
      }
    );

    return {
      carsStore,
      items,
    };
  },
});
</script>

<style scoped lang="scss">
.ads-card-right {
  position: relative;
  width: 100%;
  height: 360px;
  background-color: #3563e9;
  border-radius: 1rem;
  overflow: hidden;
  flex-shrink: 0;

  & > div {
    position: absolute;
    background-color: antiquewhite;
    width: 100%;
    height: 100%;
    -webkit-mask-image: url("~/assets/svg/ads-bg-right.svg");
    mask-image: url("~/assets/svg/ads-bg-right.svg");
  }
}

@media (max-width: 768px) {
  .ads-card-right {
    width: 100%;
    height: 300px;
    margin-top: 1rem;
    margin: 0 auto;
  }
}

.container {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  
  &:focus {
    border: 1px solid blue;
  }
}

.container img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
