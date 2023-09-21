<template>
  <div
    class="md:flex block relative items-center justify-center top-8 py-2 md:gap-8"
  >
    <AdsCardL />
    <AdsCardR />
  </div>
  <div class="flex flex-wrap justify-center custom:gap-8 mt-16 py-6">
    <div v-for="(car, index) in cars" :key="index">
      <ListedCard :carData="car" />
    </div>
  </div>
</template>
<script lang="ts">
import AdsCardL from "@/components/AdsCardL.vue";
import AdsCardR from "@/components/AdsCardR.vue";
import ListedCard from "@/components/ListedCard.vue";
import { defineComponent } from "vue";
import { ICarData } from "@/types/types.shared";

definePageMeta({
  layout: "default",
});

const carsArray: ICarData[] = [
  {
    id: "toyota-1",
    name: "Toyota",
    type: "Sedan",
    gasolineLiter: 1.5,
    kindOfTransition: "Automatic",
    people: 4,
    pricePerDay: 100,
    img: "https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1696204800&Signature=XdyXCbhM0~6MAXLXkDwGccYbXAPJXgwaEL2FGlctgoeqSIVD~MsEghsJT5EVC4dyqfXekTgoSzbxRs53G8qladaJu2s5MZzsTv-fhlj2~PydIwuN~r1dLXzzUTTvKjf0xR-ZMB9s5b4EFE8SCl9myH8F1MVXpzIgr-vJBm6jgsCClU6~tJ9pufQk61u~kBzMPE9~qViH6rdySQw8E9en1OjKheJHYx-Rzp2puWjHJlFhZy9jHN8vmyEvNJb3Tb0jPkRkO3yKU8j82f9Ll-HJJt6xIAfa-~fKS~Ko0P2T8i898VRA~-S377hF3bAC~zldxgpt4Pv687mbS59QVQ8ktw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "toyota-2",
    name: "Toyota",
    type: "Sedan",
    gasolineLiter: 1.5,
    kindOfTransition: "Automatic",
    people: 4,
    pricePerDay: 100,
    img: "https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1696204800&Signature=XdyXCbhM0~6MAXLXkDwGccYbXAPJXgwaEL2FGlctgoeqSIVD~MsEghsJT5EVC4dyqfXekTgoSzbxRs53G8qladaJu2s5MZzsTv-fhlj2~PydIwuN~r1dLXzzUTTvKjf0xR-ZMB9s5b4EFE8SCl9myH8F1MVXpzIgr-vJBm6jgsCClU6~tJ9pufQk61u~kBzMPE9~qViH6rdySQw8E9en1OjKheJHYx-Rzp2puWjHJlFhZy9jHN8vmyEvNJb3Tb0jPkRkO3yKU8j82f9Ll-HJJt6xIAfa-~fKS~Ko0P2T8i898VRA~-S377hF3bAC~zldxgpt4Pv687mbS59QVQ8ktw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "toyota-3",
    name: "Toyota",
    type: "Sedan",
    gasolineLiter: 1.5,
    kindOfTransition: "Automatic",
    people: 4,
    pricePerDay: 100,
    img: "https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1696204800&Signature=XdyXCbhM0~6MAXLXkDwGccYbXAPJXgwaEL2FGlctgoeqSIVD~MsEghsJT5EVC4dyqfXekTgoSzbxRs53G8qladaJu2s5MZzsTv-fhlj2~PydIwuN~r1dLXzzUTTvKjf0xR-ZMB9s5b4EFE8SCl9myH8F1MVXpzIgr-vJBm6jgsCClU6~tJ9pufQk61u~kBzMPE9~qViH6rdySQw8E9en1OjKheJHYx-Rzp2puWjHJlFhZy9jHN8vmyEvNJb3Tb0jPkRkO3yKU8j82f9Ll-HJJt6xIAfa-~fKS~Ko0P2T8i898VRA~-S377hF3bAC~zldxgpt4Pv687mbS59QVQ8ktw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "toyota-4",
    name: "Toyota",
    type: "Sedan",
    gasolineLiter: 1.5,
    kindOfTransition: "Automatic",
    people: 4,
    pricePerDay: 100,
    img: "https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1696204800&Signature=XdyXCbhM0~6MAXLXkDwGccYbXAPJXgwaEL2FGlctgoeqSIVD~MsEghsJT5EVC4dyqfXekTgoSzbxRs53G8qladaJu2s5MZzsTv-fhlj2~PydIwuN~r1dLXzzUTTvKjf0xR-ZMB9s5b4EFE8SCl9myH8F1MVXpzIgr-vJBm6jgsCClU6~tJ9pufQk61u~kBzMPE9~qViH6rdySQw8E9en1OjKheJHYx-Rzp2puWjHJlFhZy9jHN8vmyEvNJb3Tb0jPkRkO3yKU8j82f9Ll-HJJt6xIAfa-~fKS~Ko0P2T8i898VRA~-S377hF3bAC~zldxgpt4Pv687mbS59QVQ8ktw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "toyota-5",
    name: "Toyota",
    type: "Sedan",
    gasolineLiter: 1.5,
    kindOfTransition: "Automatic",
    people: 4,
    pricePerDay: 100,
    img: "https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1696204800&Signature=XdyXCbhM0~6MAXLXkDwGccYbXAPJXgwaEL2FGlctgoeqSIVD~MsEghsJT5EVC4dyqfXekTgoSzbxRs53G8qladaJu2s5MZzsTv-fhlj2~PydIwuN~r1dLXzzUTTvKjf0xR-ZMB9s5b4EFE8SCl9myH8F1MVXpzIgr-vJBm6jgsCClU6~tJ9pufQk61u~kBzMPE9~qViH6rdySQw8E9en1OjKheJHYx-Rzp2puWjHJlFhZy9jHN8vmyEvNJb3Tb0jPkRkO3yKU8j82f9Ll-HJJt6xIAfa-~fKS~Ko0P2T8i898VRA~-S377hF3bAC~zldxgpt4Pv687mbS59QVQ8ktw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export default defineComponent({
  components: {
    AdsCardL,
    AdsCardR,
  },
  data() {
    return {
      cars: carsArray,
    };
  },
});
</script>
