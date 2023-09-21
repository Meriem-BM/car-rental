<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>
