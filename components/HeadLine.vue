<template>
  <div class="flex justify-between items-center mt-16 my-4 lg:mx-14 mx-8">
    <div class="flex justify-normal items-center gap-2">
      <p>{{ title }}</p>
    </div>
    <div v-if="showLink" class="flex justify-normal items-center gap-2">
      <nuxt-link to="/cars" class="text-blue-500 hover:text-blue-700">
        View All
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeadLine",
  props: {
    showLink: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
